import axios from "axios";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const Dropzone = ({ requestURL }: { requestURL: string }) => {
    const [handleUpload, setHandleUpload] = useState(false);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        multiple: false,
        onDropRejected: () => {
            alert("File can't be more than 1");
        },
        onDropAccepted: () => setHandleUpload(true),
    });

    const handleFile = async (url: string) => {
        const formData = new FormData();
        acceptedFiles.map((file) => {
            formData.append("file", file, file.name);
        });
        const res = await axios({
            method: "post",
            url,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            },
        });

        toast.success(res.data.message);

        setHandleUpload(false);
    };

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-md">
                <div
                    {...getRootProps({ className: "dropzone" })}
                    className="card-body"
                >
                    <input {...getInputProps()} />
                    <p>
                        Drag and drop some files here, or click to select files
                    </p>
                </div>
            </div>
            {acceptedFiles.length != 0 ? (
                <>
                    <div className="mt-5 overflow-x-auto shadow-md">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Filename</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {acceptedFiles.map((file, id) => (
                                    <tr key={id}>
                                        <td>{file.name}</td>
                                        <td>{file.type}</td>
                                        <td>{file.size} bytes</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button
                        className={`btn mt-5 ${
                            handleUpload ? "" : "btn-ghost disabled"
                        }`}
                        onClick={() => handleFile(requestURL)}
                    >
                        {handleUpload ? "Upload" : "Uploaded!"}
                    </button>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Dropzone;
