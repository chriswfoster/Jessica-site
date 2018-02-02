module.exports = {

    createItem: function(req, res, next) {
            const dbInstance = req.app.get("db")
            console.log(req.body)
            const { item_name, item_description, image_url, item_price } = req.body
        
            dbInstance
              .create_item(item_title, item_description, image_url, item_price)
              .then(() => res.status(200).send())
              .catch(() => res.status(500).send())
          },
    }


