import { BASE_URL } from "@/constants";
import axios from "axios";
import { DocumentPickerSuccessResult } from "expo-document-picker";
import AWS from "aws-sdk";

const PATH_downloadUploadAudio = "download-upload-audio";
const PATH_getPresignedUrl = "get-presigned-url";
const PATH_updatePlaylist = "update-playlist";
const PATH_createPlaylist = "create-playlist";
const PATH_addAudio = "add-audio";
const PATH_login = "login";
const PATH_register = "register";

import { AWS_S3_BUCKET, AWS_S3_KEY, AWS_S3_KEY_ID, AWS_S3_REGION } from "./env";

AWS.config.update({
  accessKeyId: AWS_S3_KEY_ID,
  secretAccessKey: AWS_S3_KEY,
  region: AWS_S3_REGION,
});

const s3 = new AWS.S3();

const ApiCall = async (path: string, body: any) => {
  const url = `${BASE_URL}/${path}`;
  console.log(url); // FIXME
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(url, body, options);
    console.log("reaponce ::: \n", response.data); // FIXME
    if (response.status === 200 && response.data.status === "ok") {
      return response.data;
    } else {
      throw new Error(response.data.message || "Failed to process the URL");
    }
  } catch (error) {
    console.error("Error processing URL:", error); // FIXME
    throw error;
  }
};

// User Registration
const registerUser = async (name: string, email: string, password: string) => {
  const body = { name, email, password };
  return await ApiCall(PATH_register, body);
};

// User Login
const loginUser = async (email: string, password: string) => {
  const body = { email, password };
  return await ApiCall(PATH_login, body);
};

// Add Audio
const addAudio = async (
  title: string,
  coverImgUrl: string,
  audioUrl: string
) => {
  const body = { title, coverImgUrl, audioUrl };
  return await ApiCall(PATH_addAudio, body);
};

// Create Playlist
const createPlaylist = async (name: string, audio: string[]) => {
  const body = { name, audio };
  return await ApiCall(PATH_createPlaylist, body);
};

// Update Playlist
const updatePlaylist = async (
  playlistId: string,
  name: string,
  audio: string[]
) => {
  const body = { playlistId, name, audio };
  return await ApiCall(PATH_updatePlaylist, body);
};

// Get Presigned URL
const getPresignedUrl = async (mimeType: string, extension: string) => {
  const body = { mimeType, extension };
  return await ApiCall(PATH_getPresignedUrl, body);
};

// Download and Upload Audio from YouTube URL
const downloadUploadAudio = async (youtubeLink: string) => {
  const body = { youtubeURL: youtubeLink };
  return await ApiCall(PATH_downloadUploadAudio, body);
};

// upload to s3

const putToS3 = async (
  media: DocumentPickerSuccessResult,
  fileName: string
) => {
  const uri = media?.assets[0]?.uri || "";
  const mimeType = media?.assets[0]?.mimeType || "";
  const extension = media?.assets[0]?.name?.split(".").pop() || "";
  if (!uri || !mimeType || !extension) {
    console.error("Invalid media file data");
    return false;
  }

  // Fetch the file and convert to blob
  let blob;
  try {
    const response = await fetch(uri);
    blob = await response.blob();
  } catch (error) {
    console.error("Error in blob creation:", error);
    return false;
  }

  // Log the blob size to ensure it's correct
  console.log("Blob size:", blob.size / 1024, " KB");

  const params = {
    Bucket: AWS_S3_BUCKET,
    Key: `media/${fileName}`,
    Body: blob,
    ContentType: mimeType,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log("File name ::", fileName);
    console.log("S3 upload success");
    return data.Location;
  } catch (error) {
    console.log("S3 upload error::", error);
  }

  return true;
};

export const API = {
  registerUser,
  loginUser,
  addAudio,
  createPlaylist,
  updatePlaylist,
  getPresignedUrl,
  downloadUploadAudio,
  putToS3,
};
