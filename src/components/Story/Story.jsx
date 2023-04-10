import styles from './Story.module.scss';

export default function Story({ownStory}) {
    const imgUrl = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.xx.fbcdn.net%2Fassets%2F%3Frevision%3D1329671031208790%26name%3Ddesktop-instagram-gradient-logo%26density%3D1&tbnid=m-QIU_4IG4N3PM&vet=12ahUKEwiTqL38tZf-AhWxmeYKHX2mAfQQMyg1egQIARBo..i&imgrefurl=https%3A%2F%2Fhelp.instagram.com%2F110121795815331&docid=tNPuFyxbrqrZNM&w=1000&h=1000&q=instagram%20profile%20picture&ved=2ahUKEwiTqL38tZf-AhWxmeYKHX2mAfQQMyg1egQIARBo";
    console.log(ownStory);

    return (
        <>
            <button>
                <div className={`${styles.fullContainer} flex flex-col`}>
                        <img className={`${styles.image}`} src={imgUrl}></img>
                    <p className={`${styles.username}`}>
                        {ownStory ? "Your story" : "sampleusername"}
                    </p>
                </div>
            </button>
        </>
    );
}