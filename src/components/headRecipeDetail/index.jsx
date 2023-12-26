
function HeadRpDetail({ name, description, video }) {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '40px 0 30px 0',
                flexDirection: 'column',
            }}
        >
            <div style={{ width: '80%' }}>
                <div style={{ fontSize: '40px', fontWeight: '700', color: 'black' }}>{name}</div>
            </div>
            <div style={{ width: '80%', border: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '20px' }}></div>
            <div style={{ width: '80%', margin: '30px 0',fontSize:'25px' }}>{description}</div>
            <div style={{ width: '80%', position: 'relative', marginBottom: '30px' }}>
                {/* <img style={{ width: '100%', borderRadius: '12px' }} src={image} alt="" />
                <img
                    style={{ position: 'absolute', top: 'calc(50% - 43px)', left: 'calc(50% - 53px)' }}
                    src={vector}
                    alt=""
                /> */}
                <iframe
                    title={name}
                    width="100%"
                    height="630"
                    src={`https://www.youtube.com/embed/${video?.match(/^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w\-]{11})(?:\?|&|$)/)?.groups?.id}?feature=oembed`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                    // className="h-[230px] md:h-[204px] w-full"
                    style={{borderRadius: '12px'}}
                ></iframe>
            </div>
        </div>
    );
}

export default HeadRpDetail;
