import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'; //From react boostrap


export const Header = () => (

  <>
    <div class="container col-10">
      <div class="p-4 text-center bg-dark text-white">
        <h1>WhitTasks</h1>
        <p class="lead">The Pirates new way to see their day</p>
      </div>

      <div class="p-3 bg-dark">
        <nav>
          <ul class="mb-3 nav nav-pills justify-content-center">
            <li class="nav-item">
              <a href="/" class="nav-link active bg-danger text-white">Home</a>
            </li>

            <li class="nav-item">
              <a href="/Why" class="nav-link text-white">Why</a>
            </li>

            <li class="nav-item">
              <a href="/About" class="nav-link text-white">Team</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
)



