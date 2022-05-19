import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import faker from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure you want to do this?</p>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Aung Aung" 
                timeAgo="Today at 2:30PM"
                content="Nice blog post!"
                avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Tun Tun" 
                timeAgo="Today at 6:00PM"
                content="I like the subject."
                avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Yesterday at 5:00AM"
                content="I like the writing."
                avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
