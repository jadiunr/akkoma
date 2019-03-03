# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.Metadata.Providers.TwitterCard do
  alias Pleroma.User
  alias Pleroma.Web.Metadata
  alias Pleroma.Web.Metadata.Providers.Provider
  alias Pleroma.Web.Metadata.Utils

  @behaviour Provider

  @impl Provider
  def build_tags(%{
        activity_id: id,
        object: object,
        user: user
      }) do
    attachments = build_attachments(id, object)
    scrubbed_content = Utils.scrub_html_and_truncate(object)
    # Zero width space
    content =
      if scrubbed_content != "" and scrubbed_content != "\u200B" do
        "“" <> scrubbed_content <> "”"
      else
        ""
      end

    [
      {:meta,
       [
         property: "twitter:title",
         content: Utils.user_name_string(user)
       ], []},
      {:meta,
       [
         property: "twitter:description",
         content: content
       ], []}
    ] ++
      if attachments == [] or Metadata.activity_nsfw?(object) do
        [
          {:meta,
           [property: "twitter:image", content: Utils.attachment_url(User.avatar_url(user))], []},
          {:meta, [property: "twitter:card", content: "summary_large_image"], []}
        ]
      else
        attachments
      end
  end

  @impl Provider
  def build_tags(%{user: user}) do
    with truncated_bio = Utils.scrub_html_and_truncate(user.bio || "") do
      [
        {:meta,
         [
           property: "twitter:title",
           content: Utils.user_name_string(user)
         ], []},
        {:meta, [property: "twitter:description", content: truncated_bio], []},
        {:meta, [property: "twitter:image", content: Utils.attachment_url(User.avatar_url(user))],
         []},
        {:meta, [property: "twitter:card", content: "summary"], []}
      ]
    end
  end

  defp build_attachments(id, %{data: %{"attachment" => attachments}}) do
    Enum.reduce(attachments, [], fn attachment, acc ->
      rendered_tags =
        Enum.reduce(attachment["url"], [], fn url, acc ->
          media_type =
            Enum.find(["image", "audio", "video"], fn media_type ->
              String.starts_with?(url["mediaType"], media_type)
            end)

          # TODO: Add additional properties to objects when we have the data available.
          case media_type do
            "audio" ->
              [
                {:meta, [property: "twitter:card", content: "player"], []},
                {:meta, [property: "twitter:player:width", content: "480"], []},
                {:meta, [property: "twitter:player:height", content: "80"], []},
                {:meta, [property: "twitter:player", content: player_url(id)], []}
                | acc
              ]

            "image" ->
              [
                {:meta, [property: "twitter:card", content: "summary_large_image"], []},
                {:meta,
                 [
                   property: "twitter:player",
                   content: Utils.attachment_url(url["href"])
                 ], []}
                | acc
              ]

            # TODO: Need the true width and height values here or Twitter renders an iFrame with a bad aspect ratio
            "video" ->
              [
                {:meta, [property: "twitter:card", content: "player"], []},
                {:meta, [property: "twitter:player", content: player_url(id)], []},
                {:meta, [property: "twitter:player:width", content: "480"], []},
                {:meta, [property: "twitter:player:height", content: "480"], []}
                | acc
              ]

            _ ->
              acc
          end
        end)

      acc ++ rendered_tags
    end)
  end

  defp player_url(id) do
    Pleroma.Web.Router.Helpers.o_status_url(Pleroma.Web.Endpoint, :notice_player, id)
  end
end
