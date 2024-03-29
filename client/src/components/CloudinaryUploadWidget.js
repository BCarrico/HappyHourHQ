import React, { Component } from "react";
import axios from 'axios';

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = process.env.REACT_APP_CLOUD_NAME; // replace with your own cloud name
    const uploadPreset = 'f4yqllrh'; // replace with your own upload preset
    const postID = this.props.name
    
    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference
    async function checkFunc(data, postID){
        console.log(data.secure_url)
        try {
          const response = await axios({
              method: 'put',
              data: {
                  image: data.secure_url,
              },
              url: `/addImage/${postID}`
          }) 
      } catch (err) {
    console.log(err);
  }    
    }
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        cropping: true,
        croppingAspectRatio: 1,
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        tags: [postID], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        minImageWidth: 400,
        maxImageHeight: 400,
        maxImageWidth: 400, //Scales the image down to a width of 2000 pixels before uploading
        maxImageHeight: 400,
        // theme: "purple", //change to a purple theme

      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          checkFunc(result.info, postID)
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    const style = this.props.style
    const text = this.props.text
    return (
      <button id="upload_widget" className={style}>
        {text}
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
