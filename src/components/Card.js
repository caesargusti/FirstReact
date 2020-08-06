import React from "react";

export default function Card({nama, onRemove}){
    return (
        <div 
                style={{
                  color:"blue", 
                  padding:10, 
                  border: "1px solid grey",
                  marginBottom:10,
                  display: "flex",
                  justifyContent: "space-between",
                  width:"50%",
                  borderRadius:"20px",
                  }}>
                <div>{nama}</div>
                <button onClick={onRemove} className="button-remove">
                    Remove
                </button>
        </div>
    );
}