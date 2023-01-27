import Image from "next/image";
import React, { useState } from "react";

//This is the array data variable which holds the reference of the data to a variable
//named "blogPosts"
const blogPosts = [

    //This is an array data that contains our sample blog posts.
    {
        postTitle: "This the first example Post!",
        postContent: "This will be the main content of the first post. This is just a sample message, that represents a blog."
    },
    {
        postTitle: "This the second example Post!",
        postContent: "This will be the main content of the second post. This is just a sample message, that represents a blog."
    },
    {
        postTitle: "This the third example Post!",
        postContent: "This will be the main content of the third post. This is just a sample message, that represents a blog."
    },
    {
        postTitle: "Today is January 25, 2023 and tommorow is the schedule for DQAS",
        postContent: "So Tommorow will be the 2nd grading final exams and preparation for the upcoming 2nd semester. I wish you all goodluck for the upcoming exams, and wish you all for good grades."
    }

]

//Here is our React View function which gets rendered on our main page
export default function BlogPage(){

    //This variable uses the "useState" framework of React to update the list data on the frontend
    //UI which is the function "BlogPage()"

    const [posts, setPosts] = useState(blogPosts)

    //Now, we will return a JSX (HTML in Javascript) element
    return (
        <div className="mx-auto px-4">
            <div className="grid-flow-col">
                <Image src="/zaide_logo.png" alt={"Zaide LLC Logo"} width={100} height={100}></Image>
                <h1 className="text-2xl font-medium my-20">eTech Example Blog Website by Jiandale Ambal | Zaide LLC JP_PH</h1>
            </div>
            
            <ul>

                {posts.map((post ,i) => (
                    //The "li" element is our list element which is responsible for displaying the data from
                    //the variable "blogPosts" above
                    <li key={i} className="my-4">
                        <h2 className="text-xl font-medium">{post.postTitle}</h2>
                        <p className="text-red-400 ">{post.postContent}</p>
                    </li>
                ))}

            </ul>

        </div>
    )

}