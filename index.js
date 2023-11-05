const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES
app.get('/mangas', async (req, res) => {
    try {
        const newManga = await pool.query("SELECT * FROM books");
        res.json(newManga.rows);
    } catch (err) {
        console.error(err.message);
    }
})
// POST /manga -> create a manga
app.post("/mangas", async (req,res)=> {
    try {
      const { titre , author , publication_date , genre , description , stock_quantity } = req.body;
      const newManga = await pool.query(
        "INSERT INTO mangas ( titre , author , publication_date , genre , description , stock_quantity ) VALUES( $1,  $2, $3 , $4 , $5 ,$6 ) RETURNING  *",
        [ titre , author , publication_date , genre , description , stock_quantity ]
     );

     res.json(newManga.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

// GET /mangas -> return all the mangas
app.get("/allmangas", async (req, res)=> {
    try {
      const  allMangas = await pool.query(
        "SELECT * FROM mangas"
     );
     res.json(allMangas.rows); 

    } catch (err) {
        console.error(err.message);
    }
});

// GET /mangas/:id -> return a specific manga
app.get("/mangas/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const mangas = await pool.query("SELECT * FROM mangas WHERE manga_id = $1", [id]);
        res.json(mangas.rows[0]);
    } catch (err) {
       console.error(err.message);
    }
});

// PUT /manga/:id -> update a manga
app.put("/mangas/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { title  } = req.body;
        const updatemanga = await pool.query("update mangas set title = $1 WHERE manga_id= $2", [title,id]);
        res.json("title updated successfully");
    } catch (err) {
       console.error(err.message);
    }
});


// DELETE /mangas/:id -> delete a manga
app.delete('/mangas/;id', async (req,res) => {
    try {
        const {id} = req.params;
        const deletemangas = await pool.query('delete FROM mangas WHERE manga_id= $1', [id]);
        res.json('deleted successfully')
    } catch (err) {
        console.error(err.message);
     }
 });


// CRUD -> Create, Read, Update, Delete*/

app.listen(3001, () => {
    console.log("server is running at port 3001" );
});