let configObj;
let jobID;

async function getConfigFile() {

    const res = await fetch('./config.json')

    configObj = await res.json();

    console.log(configObj)
}

getConfigFile();

async function uploadFile(){

    let formData = new FormData();
    formData.append("data_file", fileupload.files[0]);
    formData.append("config", JSON.stringify(configObj));

    console.log([...formData]);

    const res = await fetch('https://asr.api.speechmatics.com/v2/jobs/', {
        method: "POST",
        headers: {

            'Authorization':'Bearer cyBZgIZfyqIPNDlkqHHHcbBQYhwhY4FZ'

        },
        body: formData,
        
    })
    ResponseObject = await res.json();
    jobID = ResponseObject.id;
    document.getElementById("jobIDfield").innerHTML = jobID;
    document.getElementById("idTextBox").value = jobID;
    // document.removeChild()
    getFileStatus(jobID);
}

async function getFileStatus(job){
    
    jobID = document.getElementById('idTextBox').value;

    jobURL = 'https://asr.api.speechmatics.com/v2/jobs/' + jobID;
    console.log(jobURL);

    const res = await fetch(jobURL, {
        method: "GET",
        headers: {

            'Authorization':'Bearer cyBZgIZfyqIPNDlkqHHHcbBQYhwhY4FZ'

        },
        
        

    })
    ResponseObject = await res.json();
    console.log(ResponseObject);
    jobStatus = ResponseObject.job.status;

    document.getElementById("statusField").innerHTML = jobStatus;
    console.log (jobStatus);
}

async function downloadTXT(saveas){
    
    jobID = document.getElementById('idTextBox').value;

    jobURL = 'https://asr.api.speechmatics.com/v2/jobs/' + jobID + '/transcript?format=txt';
    console.log(jobURL);

    const res = await fetch(jobURL, {
        method: "GET",
        headers: {

            'Authorization':'Bearer cyBZgIZfyqIPNDlkqHHHcbBQYhwhY4FZ'

        },
        
        

    })
    .then((result) => {
        if (result.status != 200) { throw new Error("Bad server response"); }
        return result.blob();
      })
     
      // (C) BLOB DATA
      .then((data) => {
        // (C1) FILE DATA IS "READY FOR USE"
        console.log(data);
     
        // (C2) TO "FORCE DOWNLOAD"
        var url = window.URL.createObjectURL(data),
        anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = saveas;
        anchor.click();
     
        // (C3) CLEAN UP
        window.URL.revokeObjectURL(url);
        document.removeChild(anchor);
      })
     
      // (D) HANDLE ERRORS - OPTIONAL
      .catch((error) => { console.log(error); });
    
}

async function downloadSRT(saveas){
    
    jobID = document.getElementById('idTextBox').value;

    jobURL = 'https://asr.api.speechmatics.com/v2/jobs/' + jobID + '/transcript?format=srt';
    console.log(jobURL);

    const res = await fetch(jobURL, {
        method: "GET",
        headers: {

            'Authorization':'Bearer cyBZgIZfyqIPNDlkqHHHcbBQYhwhY4FZ'

        },
        
        

    })
    .then((result) => {
        if (result.status != 200) { throw new Error("Bad server response"); }
        return result.blob();
      })
     
      // (C) BLOB DATA
      .then((data) => {
        // (C1) FILE DATA IS "READY FOR USE"
        console.log(data);
     
        // (C2) TO "FORCE DOWNLOAD"
        var url = window.URL.createObjectURL(data),
        anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = saveas;
        anchor.click();
     
        // (C3) CLEAN UP
        window.URL.revokeObjectURL(url);
        document.removeChild(anchor);
      })
     
      // (D) HANDLE ERRORS - OPTIONAL
      .catch((error) => { console.log(error); });
    
}

// 27291262-b7b5-d572-4d1a-97bdf49322fb:fx
// api-free.deepl.com

async function postToTranslate(){

    let formData = new FormData();
    formData.append("source_lang", "EN");
    formData.append("target_lang", "ES");
    formData.append("auth_key", "27291262-b7b5-d572-4d1a-97bdf49322fb:fx");
    formData.append("file", translateFileUpload.files[0]);



    console.log([...formData]);

    const res = await fetch('https://api-free.deepl.com/v2/document', {
        method: "POST",
        // headers: ,
        body: formData,
        
    })
    ResponseObject = await res.json();
    translationID = ResponseObject.document_id;
    transletionKey = ResponseObject.document_key;
    // document.getElementById("jobIDfield").innerHTML = jobID;
    // document.getElementById("idTextBox").value = jobID;
    // document.removeChild()
    // getTranslationStatus(jobID);

}