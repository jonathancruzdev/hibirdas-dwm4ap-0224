
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

// Posteos inscrustrado en el usuario
async function createPost( req, res  ){
    try {
        const { title, body, userId } = req.body;
        // Luego agregar validaciones... 🕓
        // 1. Obtengo el usuario
        const user = await User.findById( userId);

        if( !user ){
            res.status(404).json({message:'Usuario no encontrado', data: []});
        }
        
        const newPost =  new Post({
            title: title,
            body: body,
            user: user._id
        })
        
        await newPost.save();


        res.status(201).json({message:'ok', data: newPost});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getPosts( req, res){
    try {
        const posts = await Post.find().populate('user');
        
        res.status(200).json({ message: 'Ok', data: posts});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}
// obtiene los postes por el usuario ID
const getPostForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if( !user ){
            res.status(404).json({message:'Usuario no encontrado', data: []});
        }
        
        const posts = await Post.find({ user: user._id})


        res.status(200).json({ message: 'Ok', data: posts });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const getPostById = async ( req, res) =>{
    // implementar 🕓
}

const deletePostById = async (req, res) => {
    try {
        
        const userId = req.params.userId;
        const postId = req.params.postId;

        // obtengo el usuario por Id
        const user = await User.findById(userId);
        if( !user ){
            res.status(404).json({message:'Usuario no encontrado', data: []});
        }

        // Busco en el array de posteos el post por id y lo elimino
        const postDelete = user.posts.id(postId);

        if( !postDelete ){
            res.status(404).json({message:'Post no encontrado', data: []});
        }
        // Elimino el post
        postDelete.remove();
        // Guardo el usuario
        await user.save();

        res.status(200).json({ message: 'Posteo eliminado', data: user});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const updatePostById = async( req, res) => {
    const id = req.params.id;
    // Realizar el update 🕓
    res.status(404).json({ message: 'OK', data: {} });
    
}

// Exporto las funciones
export { createPost, getPosts, getPostById,  getPostForUser, deletePostById, updatePostById }