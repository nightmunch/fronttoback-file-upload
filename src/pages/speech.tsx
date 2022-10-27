import { NextPage } from "next";
import { useState } from "react";
import Dropzone from "../components/Dropzone";
import Layout from "./layout";

const Speech: NextPage = () => {
    const [url, setUrl] = useState("http://127.0.0.1:8000/send-audio");
    return (
        <Layout>
            <div className="polkadot min-h-screen">
                <div className="flex flex-col items-center justify-center gap-5 pt-10">
                    <span className="font-bold">Insert Backend URL</span>
                    <input
                        type="text"
                        placeholder="ex: http://127.0.0.1:8000/send-audio"
                        className="input w-96"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                    <Dropzone requestURL={url} />
                </div>
            </div>
        </Layout>
    );
};

export default Speech;
