import image from '../../acess/menu144.jpg.png'
import vector from '../../acess/Vector.png'

function HeadRpDetail() {
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
            <div style={{ width: '68%' }}>
                <div style={{ fontSize: '40px', fontWeight: '700', color: 'black' }}>Bánh phomai kem dâu</div>
            </div>
            <div style={{ width: '68%', border: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '20px' }}></div>
            <div style={{ width: '68%', margin: '30px 0'}}>
                Đây là món ăn tôi đã học được khi sống ở Brooklyn. Một công thức làm bánh siêu ngon và dễ làm!
            </div>
            <div style={{ width: '68%', position: 'relative', marginBottom: '30px'}}>
               <img style={{width: '100%', borderRadius: '12px'}} src={image} alt="" />
               <img style={{position: 'absolute', top: 'calc(50% - 43px)', left: 'calc(50% - 53px)'}} src={vector} alt="" />
            </div>
        </div>
    );
}

export default HeadRpDetail;
