import React, { createRef, useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import Post from './Post';
import { db } from './firebase';
import FlipMove from 'react-flip-move';
import { collection, onSnapshot, query, addDoc, Timestamp, orderBy } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(doc => (
                { data: doc.data(), id: doc.id }
            )))
        })
    }, [posts])

    const sendPost = (e) => {
        e.preventDefault()

        addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.profileUrl || "",
            timeStamp: Timestamp.now(),
        })

        setInput('')

    }
    const ref = createRef()

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E' />
                    <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD' />
                    <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E' />

                </div>
            </div>

            {/* POSTS */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post ref={ref} key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed