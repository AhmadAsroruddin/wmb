import hero from './../../../assets/keranjang.png'

const Hero = ()=>{
    return (
        <div className='hero' id='hero'>
            <div className='container'>
                <div className='row align-items-center' style={{minHeight: '80vdh'}}>
                    <div className='col-lg-6 col-12'>
                        <h1>Selamat Datang di Enigma Shop <strong>Pusat kebutuhan harian anda</strong></h1>
                        <h2>Temukan segala kebutuhan dan kelonting di sini!</h2>
                        <p className='my-4'>Di enigma shop kami berkomitmen untuk menyediakan produk-produk berkualitas tinggi yang memenuhi semua kebutuhan sehari-hari Anda, milai dari makanan segar, bahan pokok, sampai keperluan rumah tangga. Dengan harga yang terjangkau, belanja jadi lebih mudah dan menyenangkan
                        </p>
                        <div classNamerow gap-4>
                            <button className='col-4 btn btn-primary rounded-9'> belanja sekarang</button>
                            <button className='col-4 btn btn-outline-secondary rounded-9'>kontak awal</button>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 py-5'>
                        <img src={hero} alt='hero' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;