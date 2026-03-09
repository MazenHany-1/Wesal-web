import React from "react";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function Notfound() {
  return (
    <div className=" flex items-center justify-center bg-light-background dark:bg-dark-background px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div>
          <h1 className="text-9xl font-bold text-light-foreground dark:text-dark-foreground opacity-50">
            404
          </h1>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl text-light-muted-foreground mb-4 dark:text-dark-destructive-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-light-muted-foreground dark:text-dark-destructive-foreground max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/">
            <Button color="amber" className="flex items-center gap-2">
              <FaHome className="w-4 h-4" />
              <span>Back Home</span>
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="outlined" className="flex items-center gap-2 dark:bg-dark-foreground dark:text-dark-background">
              <FaSearch className="w-4 h-4" />
              <span>Browse courses</span>
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
