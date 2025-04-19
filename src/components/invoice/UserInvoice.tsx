"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

import { PDFContent } from "@/components/pdf-content/PDFContent";

const UserInvoice = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
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
  return (
    <>
      <section className="gi-User-invoice padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-dashboard-card">
                <PDFContent
                  title="Invoice"
                  pageSize="A4"
                  margins="20mm"
                  fileName="user-invoice.pdf"
                >
                  <div className="gi-Track-image-inner">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        "/assets/img/logo/logo.png"
                      }
                      alt="Site Logo"
                    />
                  </div>
                  <div className="row invoice-p-30">
                    <div className="col-sm-6">
                      <div className="my-2">
                        <span className="text-sm text-grey-m2 align-middle">
                          To :{" "}
                        </span>
                        <span className="name">John Deo</span>
                      </div>
                      <div className="text-grey-m2">
                        <div className="my-2">014, Mota Varachha,</div>
                        <div className="my-2">Delhi, Bharat.</div>
                        <div className="my-2">
                          <b className="text-600">Phone : </b>1234567890
                        </div>
                      </div>
                    </div>
                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                      <hr className="d-sm-none" />
                      <div className="text-grey-m2">
                        <div className="my-2">
                          <span className="text-600 text-90">ID : </span>
                          #111-222
                        </div>

                        <div className="my-2">
                          <span className="text-600 text-90">HSN Code :</span>{" "}
                          #123456
                        </div>
                        <div className="my-2">
                          <span className="text-600 text-90">Issue Date :</span>{" "}
                          Oct 12, 2021-2022
                        </div>

                        <div className="my-2">
                          <span className="text-600 text-90">Invoice No :</span>
                          6548
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gi-vendor-card-body">
                    <div className="gi-vendor-card-table mb-minus-24px">
                      <table className="table gi-vender-table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span>225</span>
                            </th>
                            <td>
                              <span>Crunchy Triangle Chips Snacks</span>
                            </td>
                            <td>
                              <span>2</span>
                            </td>
                            <td>
                              <span>$30</span>
                            </td>
                            <td>
                              <span>$320</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>548</span>
                            </th>
                            <td>
                              <span>Dates Value Pack Pouch</span>
                            </td>
                            <td>
                              <span>5</span>
                            </td>
                            <td>
                              <span>$40</span>
                            </td>
                            <td>
                              <span>$214</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>684</span>
                            </th>
                            <td>
                              <span>Californian Almonds Value Pack</span>
                            </td>
                            <td>
                              <span>3</span>
                            </td>
                            <td>
                              <span>$10</span>
                            </td>
                            <td>
                              <span>$548</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span>987</span>
                            </th>
                            <td>
                              <span>Banana Chips Snacks & Spices</span>
                            </td>
                            <td>
                              <span>1</span>
                            </td>
                            <td>
                              <span>$50</span>
                            </td>
                            <td>
                              <span>$200</span>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td className="border-none" colSpan={3}>
                              <span></span>
                            </td>
                            <td className="border-color" colSpan={1}>
                              <span>
                                <strong>Sub Total</strong>
                              </span>
                            </td>
                            <td className="border-color">
                              <span>$3520</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-none" colSpan={3}>
                              <span></span>
                            </td>
                            <td className="border-color" colSpan={1}>
                              <span>
                                <strong>Tax (10%)</strong>
                              </span>
                            </td>
                            <td className="border-color">
                              <span>$352</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-none m-m15" colSpan={3}>
                              <span className="note-text-color">
                                Extra note such as company or payment
                                information...
                              </span>
                            </td>
                            <td className="border-color m-m15" colSpan={1}>
                              <span>
                                <strong>Total</strong>
                              </span>
                            </td>
                            <td className="border-color m-m15">
                              <span>$3872</span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </PDFContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInvoice;
