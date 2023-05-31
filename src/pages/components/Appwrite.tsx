import { useState } from "react";
import { Client, Storage, Account } from "appwrite";
import { v4 as uuidv4 } from "uuid";


const Appwrite: React.FC = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);

    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("6462dfb43a09a57143bd");

    const storage = new Storage(client);

    const file = (document.getElementById("uploader") as HTMLInputElement)
      ?.files?.[0];
    const fileId = uuidv4();

    if (!file) {
      console.log("No file selected");
      setUploading(false);
      return;
    }

    // TODO- Make DB

    try {
      const response = await storage.createFile(
        "6462e0f7c71911cce706",
        fileId,
        file
      );

      // pass {url,appwriteId , userId}

      console.log(response); // Success

      const appwriteId = response.$id;

      const url =` https://cloud.appwrite.io/v1/storage/buckets/6462e0f7c71911cce706/files/${appwriteId}/view?project=6462dfb43a09a57143bd`

      

      //  https://cloud.appwrite.io/v1/storage/buckets/6462e0f7c71911cce706/files/6dc8fd98-2d98-443c-abbb-9e30f4e46808/view?project=6462dfb43a09a57143bd
      //  https://cloud.appwrite.io/v1/storage/buckets/6462e0f7c71911cce706/files/a9e95c06-81d3-4cc5-af9b-15c331cddb01/view?project=6462dfb43a09a57143bd

    //   {
    //     "$id": "a9e95c06-81d3-4cc5-af9b-15c331cddb01",
    //     "bucketId": "6462e0f7c71911cce706",
    //     "$createdAt": "2023-05-30T23:53:41.187+00:00",
    //     "$updatedAt": "2023-05-30T23:53:41.187+00:00",
    //     "$permissions": [
    //         "read(\"user:6462ebffc1e66be80a39\")",
    //         "update(\"user:6462ebffc1e66be80a39\")",
    //         "delete(\"user:6462ebffc1e66be80a39\")"
    //     ],
    //     "name": "Screenshot from 2023-05-28 18-28-17.png",
    //     "signature": "1fffec2be7d99a33078aa19f55428275",
    //     "mimeType": "image/png",
    //     "sizeOriginal": 15450,
    //     "chunksTotal": 1,
    //     "chunksUploaded": 1
    // }

      // TODO - save fileid to user in db.
    } catch (error) {
      console.log(error); // Failure
    }
    
    setUploading(false);
  };

  // TODO - Return a url for user.

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
