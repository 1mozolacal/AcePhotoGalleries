import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const staticData = [
    { name: "User 1" },
    { name: "User 2" },
    { name: "User 3" },
    { name: "User 4" },
    { name: "User 5" },
    { name: "User 6" },
]



const Tester = () => {

    const reorderHelper = (list = [], start, end) => {
        const result = Array.from(list)
        const [removed] = result.splice(start, 1)
        result.splice(end, 0, removed)

        return result
    }

    const reorder = (dataMap, src, dest) => {
        console.log("here")
        const current = [...dataMap[src.droppableId]]
        const next = [...dataMap[dest.droppableId]]
        const target = current[src.index]

        if(src.droppableId === dest.droppableId) {
            const reordered = reorderHelper(current, src.index, dest.index)

            console.log({
                ...dataMap,
                [src.droppableId]: reordered
            })
            return {
                ...dataMap,
                [src.droppableId]: reordered
            }
        }

        current.splice(src.index, 1);
        next.splice(dest.index, 0, target)
        console.log({
            ...dataMap,
            [src.droppableId]: current, 
            [src.droppableId]: next
        })
        return {
            ...dataMap,
            [src.droppableId]: current, 
            [src.droppableId]: next
        }

    }

    const [data, setData] = useState({
        a: staticData,
        b: [{ name: "User 7" }]
    })



    return (

        <DragDropContext onDragEnd={({destination, source}) => {
            if (!destination) return
    
            // Do reordering
            setData(reorder(data, source, destination))
        }}>
            {Object.entries(data).map(([k, v]) => <Droppable
                droppableId={k}
                key={k}
                direction="horizontal"
                isCombineEnabled={false}>
                {dropProvided => (<div {...dropProvided.droppableProps}>
                    <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                        {v.map(({ name }, vid) => <Draggable draggableId={name} index={vid} key={vid}>
                            {
                                (dragProvided) => (
                                    < Box component="div"
                                        {...dragProvided.dragHandleProps}
                                        {...dragProvided.draggableProps}
                                        ref={dragProvided.innerRef}>
                                        {name}
                                    </Box>
                                )
                            }
                        </Draggable>
                        )}
                    </div>
                    {dropProvided.placeholder}
                </div>
                )}
            </Droppable>
            )}
        </DragDropContext>)
}

export default Tester


{/*  */ }