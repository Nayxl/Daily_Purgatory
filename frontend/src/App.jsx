import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryList from "./components/CategoryList";
import NoteList from "./components/NoteList";
import MoodList from "./components/MoodList";
import PictureList from "./components/PictureList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <>
          <Route path="/category" element={<CategoryList />} />
          <Route path="/note" element={<NoteList />} />
          <Route path="/mood" element={<MoodList />} />
          <Route path="/picture" element={<PictureList />} />

          <Route
            path="/category"
            element={
              <Home>
                <CategoryList />
              </Home>
            }
          />
          <Route
            path="/note "
            element={
              <CategoryList>
                <NoteList />
              </CategoryList>
            }
          />
          <Route
            path="/mood"
            element={
              <CategoryList>
                <MoodList />
              </CategoryList>
            }
          />
          <Route
            path="/picture"
            element={
              <CategoryList>
                <PictureList />
              </CategoryList>
            }
          />
        </>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
