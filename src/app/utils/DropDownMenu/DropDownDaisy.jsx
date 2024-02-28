
import React from 'react';

const DropDownDaisy = () => {
    return (
        <div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" ">Profile</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 2</a></li>

                </ul>
            </div>
        </div>
    );
};

export default DropDownDaisy;