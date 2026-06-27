const links = {
    product1: "PASTE_TIKTOK_LINK_1_HERE",
    product2: "PASTE_TIKTOK_LINK_2_HERE",
    product3: "PASTE_TIKTOK_LINK_3_HERE"
  };
  
  export default function handler(req, res) {
    const { id } = req.query;
    const url = links[id];
  
    if (!url) {
      return res.status(404).send("Link not found");
    }
  
    return res.redirect(302, url);
  }