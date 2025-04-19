"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

const VendorUpload = () => {
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const [formData, setFormData] = useState<any>({
    productName: "",
    category: "",
    shortDescription: "",
    price: "",
    quantity: "",
    fullDetail: "",
    productTags: "",
    productImages: [],
    sizes: [],
    colors: ["#ff6191", "#33317d", "#56d4b7", "#009688"],
  });

  const [imagePreview, setImagePreview] = useState<string | null>(
    "/assets/img/product-images/10_1.jpg"
  );

  if (!login) {
    return (
      <div className="container">
        <p>
          Please <a href="/login">login</a> or <a href="/register">register</a>{" "}
          to view this page.
        </p>
      </div>
    );
  }

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // change image store image

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          setImagePreview(event.target.result);
        }
      };
      reader.readAsDataURL(file);

      setFormData((prevFormData: any) => ({
        ...prevFormData,
        productImages: [...prevFormData.productImages, file],
      }));
    }
  };

  // change color store color

  const handleColorChange = (index: number, value: any) => {
    const updatedColors = [...formData.colors];
    updatedColors[index] = value;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      colors: updatedColors,
    }));
  };

  // change size store size

  const handleSizeChange = (e: any) => {
    const { id, name, value, checked } = e.target;

    if (name === "sizes") {
      let updatedSizes = [...formData.sizes];

      if (checked) {
        updatedSizes.push(value);
      } else {
        updatedSizes = updatedSizes.filter((size) => size !== value);
      }

      setFormData((prevFormData: any) => ({
        ...prevFormData,
        sizes: updatedSizes,
      }));
    } else {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const product = {
      id: new Date().getTime(),
      productName: formData.productName,
      category: formData.category,
      shortDescription: formData.shortDescription,
      price: formData.price,
      quantity: formData.quantity,
      fullDetail: formData.fullDetail,
      productTags: formData.productTags,
      productImages: formData.productImages.map((file) => ({
        imageName: file.name,
        imageUrl: URL.createObjectURL(file),
      })),
      sizes: formData.sizes,
      colors: formData.colors,
    };

    let existingProducts: any[] = [];

    const storedProductsString = localStorage.getItem("products");
    if (storedProductsString) {
      existingProducts = JSON.parse(storedProductsString);
    }
    existingProducts.push(product);

    localStorage.setItem("products", JSON.stringify(existingProducts));

    setFormData({
      productName: "",
      category: "",
      shortDescription: "",
      quantity: "",
      fullDetail: "",
      productTags: "",
      price: "",
      productImages: [],
      sizes: [],
      colors: ["#ff6191", "#33317d", "#56d4b7", "#009688"],
    });
  };

  return (
    <>
      <section className="gi-vendor-uploads padding-tb-40">
        <Container>
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <Col lg={9} md={12} className="mb-24">
              <div className="gi-vendor-uploads-card gi-vendor-profile-card">
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-upload-detail">
                    <form onSubmit={handleSubmit} className="row">
                      <Col lg={12}>
                        <div className="product-upload single">
                          <div className="avatar-upload">
                            <div className="avatar-edit">
                              <input
                                type="file"
                                id="product_main"
                                className="gi-image-upload"
                                accept=".png, .jpg, .jpeg"
                                onChange={handleImageChange}
                              />
                              <label>
                                <i className="ri-pencil-line"></i>
                              </label>
                            </div>
                            {imagePreview && (
                              <div className="avatar-preview gi-preview">
                                <div className="imagePreview gi-div-preview">
                                  <img
                                    className="gi-image-preview"
                                    src={imagePreview}
                                    alt="product"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="thumbs">
                          <div className="product-upload single">
                            <div className="avatar-upload">
                              <div className="avatar-edit">
                                <input
                                  defaultValue=""
                                  type="file"
                                  id="product_main"
                                  className="gi-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label>
                                  <i className="ri-pencil-line"></i>
                                </label>
                              </div>
                              <div className="avatar-preview gi-preview">
                                <div className="imagePreview gi-div-preview">
                                  <img
                                    className="gi-image-preview"
                                    src={
                                      process.env.NEXT_PUBLIC_URL +
                                      "/assets/img/product-images/10_1.jpg"
                                    }
                                    alt="product"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-upload single">
                            <div className="avatar-upload">
                              <div className="avatar-edit">
                                <input
                                  defaultValue=""
                                  type="file"
                                  id="product_main"
                                  className="gi-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label>
                                  <i className="ri-pencil-line"></i>
                                </label>
                              </div>
                              <div className="avatar-preview gi-preview">
                                <div className="imagePreview gi-div-preview">
                                  <img
                                    className="gi-image-preview"
                                    src={
                                      process.env.NEXT_PUBLIC_URL +
                                      "/assets/img/product-images/6_1.jpg"
                                    }
                                    alt="product"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-upload single">
                            <div className="avatar-upload">
                              <div className="avatar-edit">
                                <input
                                  defaultValue=""
                                  type="file"
                                  id="product_main"
                                  className="gi-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label>
                                  <i className="ri-pencil-line"></i>
                                </label>
                              </div>
                              <div className="avatar-preview gi-preview">
                                <div className="imagePreview gi-div-preview">
                                  <img
                                    className="gi-image-preview"
                                    src={
                                      process.env.NEXT_PUBLIC_URL +
                                      "/assets/img/product-images/7_1.jpg"
                                    }
                                    alt="product"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-upload single">
                            <div className="avatar-upload">
                              <div className="avatar-edit">
                                <input
                                  defaultValue=""
                                  type="file"
                                  id="product_main"
                                  className="gi-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label>
                                  <i className="ri-pencil-line"></i>
                                </label>
                              </div>
                              <div className="avatar-preview gi-preview">
                                <div className="imagePreview gi-div-preview">
                                  <img
                                    className="gi-image-preview"
                                    src={
                                      process.env.NEXT_PUBLIC_URL +
                                      "/assets/img/product-images/8_1.jpg"
                                    }
                                    alt="product"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <label htmlFor="productName" className="form-label">
                          Product name
                        </label>
                        <input
                          name="productName"
                          type="text"
                          className="form-control"
                          id="productName"
                          value={formData.productName}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col md={6}>
                        <label className="form-label">Select Categories</label>
                        <select
                          name="category"
                          id="category"
                          className="form-select"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          <optgroup defaultValue="" label="Fashion">
                            <option value="t-shirt">T-shirt</option>
                            <option value="dress">Dress</option>
                          </optgroup>
                          <optgroup defaultValue="" label="Furniture">
                            <option value="table">Table</option>
                            <option value="sofa">Sofa</option>
                          </optgroup>
                          <optgroup defaultValue="" label="Electronic">
                            <option value="phone">I Phone</option>
                            <option value="laptop">Laptop</option>
                          </optgroup>
                        </select>
                      </Col>
                      <Col md={12}>
                        <label className="form-label">Sort Description</label>
                        <textarea
                          name="shortDescription"
                          id="shortDescription"
                          value={formData.shortDescription}
                          onChange={handleChange}
                          className="form-control"
                          rows={2}
                        ></textarea>
                      </Col>
                      <Col md={4} className="m-b-30">
                        <label className="form-label">Colors</label>
                        {formData.colors.map((color: any, index: number) => (
                          <input
                            key={index}
                            type="color"
                            className="form-control form-control-color"
                            value={color}
                            onChange={(e) =>
                              handleColorChange(index, e.target.value)
                            }
                            title="Choose your color"
                          />
                        ))}
                      </Col>
                      <Col md={8} className="m-b-30">
                        <label className="form-label">Size</label>
                        <div className="form-checkbox-box">
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              name="name"
                              id="sizes"
                              value="S"
                              onChange={handleSizeChange}
                              checked={formData.sizes.includes("S")}
                            />
                            <label>S</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              name="sizes"
                              id="sizes"
                              value="M"
                              onChange={handleSizeChange}
                              checked={formData.sizes.includes("M")}
                            />
                            <label>M</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              name="sizes"
                              id="sizes"
                              value="L"
                              onChange={handleSizeChange}
                              checked={formData.sizes.includes("L")}
                            />
                            <label>L</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              name="sizes"
                              id="sizes"
                              value="XL"
                              onChange={handleSizeChange}
                              checked={formData.sizes.includes("XL")}
                            />
                            <label>XL</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              type="checkbox"
                              name="sizes"
                              id="sizes"
                              value="XXL"
                              onChange={handleSizeChange}
                              checked={formData.sizes.includes("XXL")}
                            />
                            <label>XXL</label>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <label className="form-label">
                          Price <span>( In USD )</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          id="price"
                          value={formData.price}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col md={6}>
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          className="form-control"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                        />
                      </Col>
                      <Col md={12}>
                        <label className="form-label">Ful Detail</label>
                        <textarea
                          id="fullDetail"
                          name="fullDetail"
                          value={formData.fullDetail}
                          onChange={handleChange}
                          className="form-control"
                          rows={4}
                        ></textarea>
                      </Col>
                      <Col md={12}>
                        <label className="form-label">
                          Product Tags{" "}
                          <span>( Type and make comma to separate tags )</span>
                        </label>
                        <div className="bootstrap-tagsinput">
                          <input
                            value={formData.productTags}
                            onChange={handleChange}
                            type="text"
                            id="productTags"
                            name="productTags"
                            placeholder=""
                            size={1}
                          />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="group_tag"
                          name="group_tag"
                          defaultValue=""
                          placeholder=""
                          data-role="tagsinput"
                          style={{ display: "none" }}
                        />
                      </Col>
                      <Col md={12}>
                        <button type="submit" className="btn gi-btn-2">
                          Submit
                        </button>
                      </Col>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VendorUpload;
