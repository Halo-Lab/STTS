import React, {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import s from './DND.module.scss';
import IconStar from "../assets/IconStar/IconStar";
import IconFork from "../assets/IconFork/IconFork";
import IconDownload from "../assets/IconDownload/IconDownload";
import IconIssue from "../assets/IconIssue/IconIssue";
import IconDelete from "../assets/IconDelete/IconDelete";
import Chart from "./Chart";



const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


const getItemStyle = (isDragging, draggableStyle) => ({
    // userSelect: "none",
    // change background colour if dragging
    background: isDragging ? "rgba(56,97,225,0.51)" : "transparent",
    ...draggableStyle
});


const QuoteApp = ({data, onHandleDelete, weeklyDownload}) => {
    const [state, setState] = useState(data);

    useEffect(() => {

        setState(data);
    }, [data]);


    function onDragEnd(result) {
        const {source, destination} = result;
        // dropped outside the list
        if (!destination) {
            return;
        }


        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter((group) => group.length));
        }
    }

    return (
        <div>
            <ul className={s.listDrag}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => (
                        <Droppable key={ind} droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                                <div
                                    className={s.column}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {el.map((item, index) => (
                                        <Draggable
                                            key={item.id.toString()}
                                            draggableId={item.id.toString()}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    className={s.item}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    <a href={item?.html_url ?? '/'} className={s.name}>{item.name}</a>
                                                    <p className={s.owner}>{item?.owner?.login}</p>
                                                    <div className={s.stats}>

                                                        <div className={s.star}>
                                                            <div className={s.icon}>
                                                                <IconStar/>
                                                            </div>
                                                            <p>{item?.stargazers_count}</p>
                                                        </div>

                                                        <div className={s.fork}>
                                                            <div className={s.icon}>
                                                                <IconFork color={'#0e43ff'}/>
                                                            </div>
                                                            <p>{item?.forks}</p>
                                                        </div>

                                                        <div className={s.downloads}>
                                                            <div className={s.icon}>
                                                                <IconDownload/>
                                                            </div>
                                                            <p>{weeklyDownload(item?.dataWeekly) ?? '-'}</p>
                                                        </div>

                                                        <div className={s.issue}>
                                                            <div className={s.icon}>
                                                                <IconIssue/>
                                                            </div>
                                                            <p>{item?.open_issues}</p>
                                                        </div>

                                                    </div>

                                                    {item?.dataWeekly && <div className={s.chart}>
                                                        <Chart arr={item.dataWeekly}/>
                                                    </div>}

                                                    <div onClick={() => onHandleDelete(item?.full_name)}
                                                         className={s.delete}>
                                                        <IconDelete/>
                                                    </div>

                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>
            </ul>
        </div>
    );
}
export default QuoteApp;

