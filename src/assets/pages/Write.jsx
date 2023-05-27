import React, { useEffect, useRef, useState } from "react";
import autosize from "autosize";
import "../css/write.css";

const Write = () => {
  const [image, setImage] = useState(null);
  const [showNextSection, setShowNextSection] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }

    if (textRef.current) {
      autosize(textRef.current);
    }

    return () => {
      if (textRef.current) {
        autosize.destroy(textRef.current);
      }
    };
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    const fileInput = document.getElementById("file-input");
    fileInput.value = null;
  };
  const handleNext = () => {
    setShowNextSection(true);
  };

  return (
    <div>
      <div class="container-fluid formContainer pt-4">
        <div class="form-group">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="mb-4 d-flex justify-content-center mt-4"></div>
              <div class="d-flex justify-content-center ">
                <div className="file-upload">
                  <button
                    className="btn btn_get btn_get_two w-100 p-2"
                    type="button"
                  >
                    Add Image
                  </button>

                  <div className="image-upload-wrap">
                    <input
                      id="file-input"
                      className="file-upload-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <div className="drag-text">
                      <p>Drag and drop a file or select add Image</p>
                    </div>
                  </div>
                  <div className="file-upload-content">
                    {image && (
                      <img
                        className="file-upload-image"
                        src={image}
                        alt="your image"
                      />
                    )}
                    <div className="image-title-wrap">
                      {image && (
                        <button
                          type="button"
                          className="remove-image"
                          onClick={handleRemoveImage}
                        >
                          Remove
                          <span className="image-title"></span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 m-5">
              <div class="container-fluid border border-3 rounded ">
                <div class="row m-2">
                  <div class="col-12 mb-3">
                    <h5 class="formTitle ">Story Details</h5>
                  </div>

                  <div class="col-12">
                    <label for="inputText" class="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputText"
                      placeholder="Untitled Story"
                    />

                    <label for="exampleTextarea" class="col-form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="descriptionTextarea"
                      rows="4"
                    ></textarea>

                    <label for="exampleInput" class="col-form-label">
                      Main Characters
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInput"
                      placeholder=""
                    />

                    <label for="exampleInput" class="col-form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInput"
                      placeholder=""
                    />

                    <label for="exampleInput" class="col-form-label">
                      Language
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInput"
                      placeholder=""
                    />

                    <label for="exampleInput" class="col-form-label">
                      Copyright
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInput"
                      placeholder=""
                    />

                    <button
                      class="btn btn_get btn_get_two mt-4 w-25"
                      type="submit"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNextSection && (
        <div>
          {
            <section id="hidden-section">
              <div class="container-fluid mb-2 mt-5 pt-5 writeSection">
                <div className="row">
                  <div className="col-12 text-center">
                    <div class="input-container">
                      <input type="text" id="input" required="" />
                      <label for="input" class="label">
                        Enter Text
                      </label>
                      <div class="underline"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-center">
                    <div id="wrapper">
                      <form id="paper" method="get" action="">
                        <textarea
                          placeholder="Type your text."
                          id="textarea"
                          name="text"
                          rows="6"
                          ref={textRef}
                        ></textarea>
                        <br />
                      </form>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 mb-5 text-center">
                    <button class="btn writeAreaBtn m-3 ">Save</button>
                    <button class="btn writeAreaBtn m-3">Preview</button>
                    <button class="btn writeAreaBtn m-3">publish</button>
                  </div>
                </div>
              </div>
            </section>
          }
        </div>
      )}
    </div>
  );
};

export default Write;
