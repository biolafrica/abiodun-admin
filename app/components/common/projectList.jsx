"use client"
import { useState } from "react"
import Pagination from "./pagination";
import usePagination from "@/app/hooks/usePagination";

export default function ProjectList({projects}){

  const [searchTerm, setSearchTerm]= useState("");
  const filteredProjects = projects.filter(project=> (project.title).toLowerCase().includes(searchTerm.toLowerCase()))
  const {
    currentData, 
    currentPage, 
    totalPages, 
    goToNextPage, 
    goToPreviousPage} = usePagination(filteredProjects, 5)
  return(

    <div className="project-cont-body">

      <div className="project-cont-body-search">
        <input 
          type="search" 
          name="search" 
          value={searchTerm}
          placeholder="search projects" 
          onChange={(e)=>setSearchTerm(e.target.value)} 
        />

      </div>

      <div className="project-cont-body-header">
        <h5>Project name</h5>
        <h5>Action</h5>
      </div>

      <div className="project-cont-body-body">

        {currentData.length !== 0 ? 
          ( currentData.map((project=>(
              <div className="blog-cont-body-row" key={project.id}>
                <h5>{project.title}</h5>
                <div className="action-cont">
                  <img src="/icons/edit.svg" alt="edit icon" id={project.id} />
                  <img src="/icons/delete.svg" alt="delete icon" id={project.id} />
                </div>
              </div>
          
            )))
          ):(<h4 className="empty">No Projects Available</h4>)
        }

      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        goToNextPage={goToNextPage} 
        goToPreviousPage={goToPreviousPage}
      />


    
    </div>
   
  )
}