import './Manager.css'
import { useEffect } from 'react'

export default function Manager({manager_name, title, email, avatar}) {
    const avatarSrc = avatar || 'https://via.placeholder.com/80?text=JD';

    // diagnostic: logs when the component mounts
    useEffect(() => {
        console.log('Manager rendered', { manager_name, title, email, avatar });
    }, []);

    return (
        <div className='manager'>
            <div className='manager-info'>
                <img className='manager-avatar' src={avatarSrc} alt={manager_name || "Manager"} />
                <div>
                    <h1 className='manager-name'>{manager_name}</h1>
                    <p>{title}</p>
                </div>
            </div>
            <p className='email'>{email}</p>
        </div>
    )
}