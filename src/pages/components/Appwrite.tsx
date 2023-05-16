import { useState } from "react";
import { Client, Storage, Account } from "appwrite";
import { v4 as uuidv4 } from "uuid";

const Appwrite: React.FC = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);

    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(`${process.env.PROJECT_ID}`);

    const storage = new Storage(client);

    const file = (document.getElementById("uploader") as HTMLInputElement)
      ?.files?.[0];
    const fileId = uuidv4();

    if (!file) {
      console.log("No file selected");
      setUploading(false);
      return;
    }

    try {
      const response = await storage.createFile(
        `${process.env.BUCKET_ID}`,
        fileId,
        file
      );
      console.log(response); // Success
    } catch (error) {
      console.log(error); // Failure
    }

    setUploading(false);
  };

  return (
    <div className="">
      <div>Upload a file</div>
      <input type="file" id="uploader" className="my-3" />
      <button className="bg-white my-5 text-black px-5 py-2 rounded-xl font-semibold" onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default Appwrite;
