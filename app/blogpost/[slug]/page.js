"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Client, Databases, Query, ID } from "appwrite";


export default function page({ params }) {
    const client = new Client();
    const [blog, setBlog] = useState([])

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('66f500770026661b5d80')

    const databases = new Databases(client);
    let promise = databases.listDocuments(
        '66f505cc0024f344256d',
        '66f505e3001df05f77c2',
        [
            Query.equal('slug', params.slug)
        ]
    );

    promise.then(function(response) {
        console.log(response)
        setBlog(response.documents[0])
    }), function(error){
        console.log(error);
    }

    return <>
        <Navbar />
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-6">
                {blog?.title}
            </h1>
        </div>
        <div className="">
            {!blog && "Loading..."}
            <div> Author : {blog?.author}</div>
            <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
        </div>
    </>
}
