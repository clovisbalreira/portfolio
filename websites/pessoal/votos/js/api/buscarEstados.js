function getPosition(options = {}) {
    return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
        reject(new Error("Geolocalização não suportada"));
        return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

export async function init() {
    try {
        const pos = await getPosition({ enableHighAccuracy: true, timeout: 10000 });
        const { latitude, longitude } = pos.coords;
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
        );
        const data = await response.json();
        const estado = data.address.state || "Estado não identificado";
        return estado
    } catch (err) {
        info.textContent = "Erro: " + err.message;
    }
}
