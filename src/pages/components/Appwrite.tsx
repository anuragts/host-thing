import { useState } from "react";
import { Client, Storage } from "appwrite";
import { v4 as uuidv4 } from "uuid";

const Appwrite: React.FC = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);

    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("6462dfb43a09a57143bd")
  
      

    const storage = new Storage(client);

    const file = (document.getElementById("uploader") as HTMLInputElement)?.files?.[0];
    const fileId = uuidv4();

    if (!file) {
      console.log("No file selected");
      setUploading(false);
      return;
    }

    try {
      const response = await storage.createFile("6462e0f7c71911cce706", fileId, file);
      console.log(response); // Success
    } catch (error) {
      console.log(error); // Failure
    }

    setUploading(false);
  };

  return (
    <div>
      <div>Upload a file</div>
      <input type="file" id="uploader" />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default Appwrite;
