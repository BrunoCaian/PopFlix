import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonSearch, FormSearch, InputSearch } from "./styles";
import { FaSearch } from "react-icons/fa";
import { normalizeText } from "../../utils/normalizeText";

export default function SearchBar() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (input.trim() === '') return;
        const query = normalizeText(input.trim());
        navigate(`/search?query=${encodeURIComponent(query)}`);
        setInput('');
      };

    return (
        <FormSearch onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
        }}>
            <InputSearch
                type="text"
                placeholder="Buscar filme"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <ButtonSearch type="submit">
                <FaSearch />
            </ButtonSearch>
        </FormSearch>
    );
}