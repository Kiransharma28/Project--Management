
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import {
  Box,
  Breadcrumbs,
  Grid2,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseBtn from "../components/Buttons/CloseBtn";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Estimate = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };


  // Delete modal open and close
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  // View Modal open and close
  const [viewOpen, setViewOpen] = useState(false);
  const handleViewOpen = () => {
    setViewOpen(true);
  };
  const handleViewClose = () => {
    setViewOpen(false);
  };

  // Tab panel in view modal
  const [activeTab, setActiveTab] = useState("Project Details");

  return (
    <div>
      <SideBar>
        <div className="mx-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={'/'}>
              Dashboard
            </Link>

            <Typography sx={{ color: "text.primary" }}>Estimate</Typography>
          </Breadcrumbs>
        </div>

        <div className="flex flex-row flex-wrap place-content-between mt-6 px-6 gap-x-2 gap-y-4">
          <div>
            <h4 className="text-2xl font-bold">Estimate</h4>
          </div>
          <div>
            <button onClick={handleOpen}
              className='bg-[var(--primary1)] text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-[var(--primary2)] shadow-[2px_2px_5px] hover:shadow-gray-400 transition-all'> <AddIcon /> Add Estimate</button>
          </div>
        </div>

        <div className="m-6 mt-8 flex flex-row flex-wrap items-center justify-center ">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell> Sub Total</TableCell>
                  <TableCell>GST</TableCell>
                  <TableCell>CGST</TableCell>
                  <TableCell>VAT</TableCell>
                  <TableCell>Other Taxes</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>21/03/25</TableCell>
                  <TableCell>28/06/26</TableCell>
                  <TableCell>Client 1</TableCell>
                  <TableCell>P1</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>800</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={handleViewOpen}
                      aria-label="edit"
                      color="success"
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleEditOpen}
                      aria-label="edit"
                      color="warning"
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={handleDeleteOpen}
                      aria-label="delete"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>21/03/25</TableCell>
                  <TableCell>28/06/26</TableCell>
                  <TableCell>Client 1</TableCell>
                  <TableCell>P1</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>800</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={handleViewOpen}
                      aria-label="edit"
                      color="success"
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleEditOpen}
                      aria-label="edit"
                      color="warning"
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={handleDeleteOpen}
                      aria-label="delete"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>21/03/25</TableCell>
                  <TableCell>28/06/26</TableCell>
                  <TableCell>Client 1</TableCell>
                  <TableCell>P1</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>800</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={handleViewOpen}
                      aria-label="edit"
                      color="success"
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleEditOpen}
                      aria-label="edit"
                      color="warning"
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={handleDeleteOpen}
                      aria-label="delete"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>

            </Table>

          </TableContainer>
        </div>

        {/*Add Estimate MODAL */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="overflow-scroll h-[85vh] md:h-[38.5rem]  no-scrollbar">
              <div className="h-fit">
                <h5 className=" text-2xl font-bold">Add Estimate</h5>
                <form
                  action=""
                  className=" mt-8 flex flex-col gap-y-2"
                >
                  <Grid2 container spacing={2} className="w-full">{/*Date*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimatedate">Date</label>
                      <input
                        type="date"
                        required
                        placeholder="Date"
                        name="estimatedate"
                        id="estimatedate"
                      />
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">{/*Due Date*/}
                      <label htmlFor="estimateduedate">Due Date</label>
                      <input
                        type="date"
                        required
                        placeholder="Due Date"
                        name="estimateduedate"
                        id="estimateduedate"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={2} className="w-full">
                    {/*Client*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimateclient">Client</label>
                      <select name="client" id="client">
                        <option value="">Select </option>
                        <option value="">Client 1</option>
                        <option value="">Client 2</option>
                        <option value="">Client 3</option>
                        <option value="">Client 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      {/*Project*/}
                      <label htmlFor="estimateproject">Project</label>
                      <select name="estimateproject" id="estimateprojec">
                        <option value="">Select </option>
                        <option value="">Project 1</option>
                        <option value="">Project 2</option>
                        <option value="">Project 3</option>
                        <option value="">Project 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={2} className="w-full">
                    {/*Sub Total*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="subtotal">Sub Total</label>
                      <input
                        type="text"
                        required
                        placeholder="Sub Total"
                        name="estimatesubtotal"
                        id="estimatesubtotal"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      {/*GST*/}
                      <label htmlFor="estimategst">GST</label>
                      <input
                        type="number"
                        required
                        placeholder="GST"
                        name="estimategst"
                        id="estimategst"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={2} className="w-full">
                    {/*CGST*/}
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="estimatecgst">CGST</label>
                      <input
                        type="number"
                        placeholder="CGST"
                        name="estimatecgst"
                        id="estimatecgst"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                    {/*VAT*/}
                    <label htmlFor="estimatevat">VAT</label>
                    <input
                      type="text"
                      placeholder="VAT"
                      name="estimatevat"
                      id="estimatevat"
                    />
                    <small></small>
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                    {/*Other Taxes*/}
                    <label htmlFor="estimateothertaxes">Other Taxes</label>
                    <input
                      type="text"
                      placeholder="number"
                      name="estimateothertaxes"
                      id="estimateothertaxes"
                    />
                    <small></small>
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                    {/*Discount*/}
                    <label htmlFor="estimatediscount">Discount</label>
                    <input
                      type="text"
                      placeholder="number"
                      name="estimatediscount"
                      id="estimatediscont"
                    />
                    <small></small>
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                    {/*Total*/}
                    <label htmlFor="estimatetotal">Total</label>
                    <input
                      type="text"
                      placeholder="number"
                      name="estimatetotal"
                      id="estimatetotal"
                    />
                    <small></small>
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                    {/*Status*/}
                    <label htmlFor="estimatestatus">Status</label>
                    <select name="estimatestatus" id="estimatestatus">
                      <option value="">Select </option>
                      <option value="">Rejected</option>
                      <option value="">Pending</option>
                      <option value="">Accepted</option>
                    </select>
                    <small></small>
                  </Grid2>

                  {/*note*/}
                  <div className="w-full inputData">
                    <label htmlFor="estimatenote">Note</label>
                    <textarea
                      rows={4}
                      placeholder="note"
                      name="estimatenote"
                      id="estimatenote"
                    ></textarea>
                    <small></small>
                  </div>{/*cancel button*/}
                  <div className="flex flex-row flex-wrap gap-4 justify-end">
                    <Button onClick={handleClose} variant="contained" color="inherit" >Cancel</Button>
                    {/*submit button*/}
                    <Button varient="contained" class='bg-[var(--primary1)] text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-[var(--primary2)] shadow-[2px_2px_5px] hover:shadow-gray-400 transition-all'>Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Modal>
        {/* Delete Modal*/}

        <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="overflow-scroll h-[85vh] md:h-[38.5rem] no-scrollbar">
              <div className="h-fit">
                <h5 className=" text-2xl font-bold">Update Estimate</h5>
                <form
                  action=""
                  className="addProject mt-8 flex flex-col gap-y-2"
                >
                  <Grid2 container spacing={2} className="w-full">
                    {/*Date*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimateDate">Date</label>
                      <input
                        type="date"
                        required
                        placeholder="Estimate Date"
                        name="estimatedate"
                        id="estimatedate"
                      />
                    </Grid2>
                    {/* Estimate Due Date*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimateDueDate">Due Date</label>
                      <input
                        type="date"
                        required
                        placeholder="Estimate Due Date"
                        name="estimateduedate"
                        id="estimateduedate"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">
                    {/* Estimate Client*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimateclient">Client</label>
                      <select name="estimateclient" id="estimateclient">
                        <option value="">Select </option>
                        <option value=""> Client1</option>
                        <option value=""> Client2</option>
                        <option value="">Client 3</option>
                        <option value="">Client 4</option>
                      </select>
                      <small></small>
                    </Grid2>
                    {/* Estimate Project*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimateproject">Project</label>
                      <select name="estimateproject" id="estimateproject">
                        <option value="">Select </option>
                        <option value=""> P1</option>
                        <option value=""> P2</option>
                        <option value=""> P3</option>
                        <option value="">P4</option>
                      </select>
                      <small></small>
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={2} className="w-full">
                    {/* Estimate Sub Total*/}
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">
                      <label htmlFor="estimateSubTotal">Sub Total</label>
                      <input
                        type="number"
                        required
                        placeholder="Estimate Sub Total"
                        name="estimatesubtotal"
                        id="estimateduesubtotal"
                      />
                      <small></small>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">{/*Estimate GST*/}
                      <label htmlFor="estimateGSTt">GST</label>
                      <input
                        type="number"
                        required
                        placeholder="Estimate GST"
                        name="estimateGST"
                        id="estimatedueGST"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">{/*Estimate CGST*/}
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="estimateCGST">CGST</label>
                      <input
                        type="number"
                        placeholder="estimate CGST"
                        name="estimateCGST"
                        id="estimateCGST"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">{/*Estimate VAT*/}
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="estimateVAT">VAT</label>
                      <input
                        type="number"
                        placeholder="estimate VAT"
                        name="estimateVAT"
                        id="estimateVAT"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">{/*Estimate Other Taxes*/}
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="estimateOtherTaxes">Other Taxes</label>
                      <input
                        type="number"
                        placeholder="estimate Other Taxes"
                        name="estimateOtherTaxes"
                        id="estimateOtherTaxes"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} className="w-full">{/*Estimate Discount*/}
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="estimateDiscount">Discount</label>
                      <input
                        type="number"
                        placeholder="estimate Discount"
                        name="estimateDiscount"
                        id="estimateDiscount"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={2} className="w-full">{/*Estimate Total*/}
                    <Grid2 size={{ xs: 12 }} className="inputData">
                      <label htmlFor="estimateTotal">Total</label>
                      <input
                        type="number"
                        placeholder="estimate Total"
                        name="estimateTotal"
                        id="estimateTotal"
                      />
                      <small></small>
                    </Grid2>
                  </Grid2>


                  <Grid2 size={{ xs: 12, sm: 6 }} className="inputData">{/*Estimate Status*/}
                    <label htmlFor="estimateStatus">Status</label>
                    <select name="estimatestatus" id="estimatestatus">
                      <option value="">Select </option>
                      <option value="">Rejected</option>
                      <option value="">Pending</option>
                      <option value="">Accepted</option>
                    </select>
                    <small></small>
                  </Grid2>

                  {/*Estimate Note*/}
                  <div className="w-full inputData">
                    <label htmlFor="estimateNote">Note</label>
                    <textarea
                      rows={4}
                      placeholder="estimate Note"
                      name="estimateNote"
                      id="estimateNote"
                    >
                    </textarea>
                    <small></small>
                  </div>
                  {/*cancel button*/}

                  <div className="flex flex-row flex-wrap gap-4 justify-end">
                    <Button onClick={handleEditClose} variant="contained" color="inherit"  >Cancel</Button>
                    {/*submit button*/}
                    <Button varient="contained" class='bg-[var(--primary1)] text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-[var(--primary2)] shadow-[2px_2px_5px] hover:shadow-gray-400 transition-all'

                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Modal>

        {/* Delete Modal*/}

        <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style, width: 400 }} className="rounded-[.5rem] ">
            <div className="w-full py-3 ">
              <div>Do you want to delete ?</div>
              <div className="flex mt-8 justify-end gap-4">
                <Button onClick={handleDeleteClose} variant="contained" color="inherit"
                >
                  Close
                </Button>
                <Button variant="contained" class='bg-red-700 text-white px-4 py-2 rounded-[5px] cursor-pointer hover:bg-red-600 shadow-[2px_2px_5px] hover:shadow-gray-400 transition-all '>Delete</Button>
              </div>
            </div>
          </Box>
        </Modal>

        {/* View Modal */}
        <Modal
          open={viewOpen}
          onClose={handleViewClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className=""
        >
          <Box sx={{ ...style }} className="rounded-[.5rem] ">
            <div className="w-full  ">
              <div>
                <div className="  mx-auto ">
                  {/* Tab Navigation */}
                  <div className="flex flex-row justify-between items-start ">
                    <div className="flex max-w-md w-full gap-2">
                      {["Estimate Details", "Client Details"].map(
                        (tab) => (
                          <button
                            key={tab}
                            className={`flex-1 mb-4 cursor-pointer bg-gray-300 py-2 text-center  capitalize border-b-2  
            ${activeTab === tab ? " border-[var(--primary1)] text-[var(--primary1)] font-bold" : "text-gray-800 border-transparent font-semibold"}`}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        )
                      )}
                    </div>

                    <div className="w-[2rem] text-black">
                      <IconButton onClick={handleViewClose}>
                        <CancelIcon className="text-gray-800" />
                      </IconButton>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="h-[20rem] overflow-scroll no-scrollbar">
                    <div className="p- h-fit">
                      {activeTab === "Estimate Details" && (
                        <div className="space-y-2">
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Date : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>21/03/25</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Due Date : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>28/05/25</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Client 1</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Project: </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>P1</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className=""> Sub Total : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>10000</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Toatal : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>8000</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Status : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>pending</div>
                            </Grid2>
                          </Grid2>

                        </div>
                      )}

                      {activeTab === "Client Details" && (
                        <div className="space-y-2">
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Name : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>name</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Email : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>example@email.com</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Number : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>1093735</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Client Address : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum </div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Country :  </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>India</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Company Name : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>Lorem ipsum</div>
                            </Grid2>
                          </Grid2>

                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Company Email : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>company@gmail.com</div>
                            </Grid2>
                          </Grid2>
                          <Grid2 container spacing={2} className="">
                            <Grid2 size={4} className="font-bold space-y-2">
                              <div className="">Comapny Contact : </div>
                            </Grid2>
                            <Grid2 size={8} className="space-y-2">
                              <div>
                                837355738
                              </div>
                            </Grid2>
                          </Grid2>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 justify-end gap-4">
                <CloseBtn
                  onClick={handleViewClose}
                  className={"border border-gray"}
                >
                  Close
                </CloseBtn>
              </div>
            </div>
          </Box>
        </Modal>
      </SideBar>
    </div>
  );
};

export default Estimate;