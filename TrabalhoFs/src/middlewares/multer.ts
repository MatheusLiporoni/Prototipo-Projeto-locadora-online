import multer from "multer"
import path from "path"


export default {
    storage: multer.diskStorage({
        destination:path.resolve(__dirname, '..' , '..' , 'public') ,

        filename(req , file, cb) {
            const filename = `${file.originalname}.jpg`

            cb(null, filename)
        }

    })

}