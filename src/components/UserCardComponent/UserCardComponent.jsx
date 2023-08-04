import avatar from '../../assets/images/avatar.jpg'
import React, { useState } from 'react';
import '../UserCardComponent/UserCardComponent.css'
import '../SearchUserComponent/SearchUserComponent'

const UserCardComponent = ({ user }) => {
    const [likes, setLikes] = useState(user.likes || 0);

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    return (
        <div className="card col-4">
            <img src={avatar} alt={user.nickname} />
            <div className="card-body">
                <h5 className="card-title">{user.nickname}</h5>
                <p className="card-text">
                    Idade: {user.idade}
                    <br />
                    Email: {user.email}
                    <br />
                    Likes: {likes}
                </p>
                <button onClick={handleLike}>Like</button>
            </div>
        </div>
    );
};

export default UserCardComponent;