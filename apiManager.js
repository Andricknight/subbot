async function uploadFile(){

    const configJson = '{"type" : "transcription", "transcription_config" : "transcription_config", { "language": "en", "additional_vocab": [ "Cisco" ]}';

    let formData = new FormData();
    formData.append("data_file", fileupload.files[0]);
    formData.append("config", configJson);

    console.log([...formData]);

    fetch('https://asr.api.speechmatics.com/v2/jobs/', {
        method: "POST",
        headers: {

            'Authorization':'Bearer cyBZgIZfyqIPNDlkqHHHcbBQYhwhY4FZ'

        },
        body: formData,
        
        
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}