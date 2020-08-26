# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Upload.Filter.Exiftool do
  @moduledoc """
  Strips GPS related EXIF tags and overwrites the file in place.
  Also strips or replaces filesystem metadata e.g., timestamps.
  """
  @behaviour Pleroma.Upload.Filter

  @spec filter(Pleroma.Upload.t()) :: :ok | {:error, String.t()}
  def filter(%Pleroma.Upload{name: file, tempfile: path, content_type: "image" <> _}) do
    # webp is not compatible with exiftool at this time
    if Regex.match?(~r/\.(webp)$/i, file) do
      :ok
    else
      strip_exif(path)
    end
  end

  def filter(_), do: :ok

  defp strip_exif(path) do
    try do
      case System.cmd("exiftool", ["-overwrite_original", "-gps:all=", path], parallelism: true) do
        {_response, 0} -> :ok
        {error, 1} -> {:error, error}
      end
    rescue
      _e in ErlangError ->
        {:error, "exiftool command not found"}
    end
  end
end
