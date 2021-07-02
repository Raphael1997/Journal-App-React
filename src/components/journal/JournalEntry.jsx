import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: "url(https://i.pinimg.com/originals/e9/dc/1d/e9dc1d6540e89f90f031116dd2395706.jpg)"
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">A new day</p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <span>20</span>
            </div>
        </div>
    )
}
