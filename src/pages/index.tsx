import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "./layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
                            Malaya <span className="text-primary">Speech</span>
                        </h1>
                        <p className="py-6">Innovate the future.</p>
                        <Link href={"/speech"}>
                            <button className="btn-primary btn">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
