import React from 'react';

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="toolbar">
            {filters.map((filter) =>
                <button
                    type="button"
                    className={"item " + (filter === selected ? 'text-white bg-gray-800' : 'text-black bg-white')}
                    onClick={() => onSelectFilter(filter)}
                    disabled={filter === selected}
                    key={filter}
                >
                    {filter}
                </button>
            )}
        </div>
    );
};

export default Toolbar;