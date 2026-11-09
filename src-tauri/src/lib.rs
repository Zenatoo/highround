pub fn run() {
    tauri::Builder::default()
        // External links (sources, videos, GitHub) open in the default browser:
        // navigating the app window away from HighRound would leave the user stuck, with no back button.
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running HighRound");
}
