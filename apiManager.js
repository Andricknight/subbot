async function uploadFile(){



    let formData = new FormData();
    formData.append("data_file", fileupload.files[0]);
    formData.append("config", fetch("https://andricknight.github.io/subbot/"));

    console.log([...formData]);

    // fetch('https://asr.api.speechmatics.com/v2/jobs/', {
    //     method: "POST",
    //     headers: {

    //         'Authorization':'Bearer cyBZgIZfyqIPNDlkqHHHcbBQYhwhY4FZ'

    //     },
    //     body: formData,
        
        
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
}