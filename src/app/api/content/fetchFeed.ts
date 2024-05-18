const fetchField = async () => {
    const res = await fetch("/api/content");
    const data = await res.json();
    return data;
}

export default fetchField;