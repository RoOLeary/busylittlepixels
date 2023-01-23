export default async function handler(req, res) {
    res.setPreviewData({});
    const response = await fetch(`https://craft-ezhk.frb.io/api/homepage.json`, { 
            cache:'force-cache', 
        }
    );
    const data = await response.json();
    // console.log(data);
    res.status(200).json(
      { 
        schlerp: 'Mderp', 
        floop: 'Magoop', 
        posts: data 
      })
  }
