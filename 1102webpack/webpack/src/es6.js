async()=>{
    await new Promise((success,error)=>{
        setTimeout(()=>{
            success(100)
        },2000)
    })
}