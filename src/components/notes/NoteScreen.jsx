import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some title here"
                    className="notes__title-input"
                />

                <textarea placeholder="What happened today" className="notes__textarea" >

                </textarea>

                <div className="notes__image">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2020/11/International-Landscape-Photographer-Year-PhotographER-1st-KelvinYuen-2.jpg" alt="paisaje" />
                </div>
            </div>
        </div>
    )
}
