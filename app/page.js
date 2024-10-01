"use client"
import Image from "next/image";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export default function Home() {

  function getContent(htmlString, maxLength=100){
    const tempElement = document.createElement('div');
    tempElement.innerHTML=htmlString;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    if(textContent.length > maxLength){
      const truncText = textContent.substring(0, maxLength);

      const truncateHTML = truncText + "...";
      return truncateHTML;
    }
  }


  const client = new Client();
  const [blogs, setBlogs] = useState([])

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f500770026661b5d80')

  const databases = new Databases(client);
  //   const promise = databases.createDocument(
  //     '66f505cc0024f344256d',
  //     '66f505e3001df05f77c2',
  //     ID.unique(),
  //     element
  // );

  // promise.then(function (response) {
  //     console.log(response);
  // }, function (error) {
  //     console.log(error);
  // });

  // let promise = databases.listDocuments(
  //   '66f505cc0024f344256d',
  //   '66f505e3001df05f77c2',
  //   [ ]
  // );

  // promise.then(function (response) {
  //   console.log(response);
  //   setBlogs(response.documents)
  // }, function (error) {
  //   console.log(error);
  // });



  useEffect(() => {
    // API call inside useEffect to ensure it only happens on mount
    const fetchData = async () => {
      try {
        let response = await databases.listDocuments(
          "66f505cc0024f344256d",  // Your database ID
          "66f505e3001df05f77c2",  // Your collection ID
          []
        );
        setBlogs(response.documents); // Set the blogs state with response data
        console.log(response.documents)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();  // Fetch data only when component mounts
  }, []);

  const handleReadMore = (title) => {
    // You can implement navigation to a detailed blog view here
    console.log(`Read more about: ${title}`);
  };


  return (
    <>
      <div>
        <Navbar />
      </div>

      <h1 className="m-5 bold text-2xl font-bold">
        Read Latest Blogs
      </h1>

      <div>
        {blogs.length == 0 && "Loading..."}
        {blogs.map((blog, index) => (
          <div>

              <BlogCard
                key={blog.$id}
                title={blog.Title}
                author={blog.Author}
                content={getContent(blog.Content)}
                views={blog.Views}
              />
            </div>
        ))}
      </div>
    </>
  );
}
