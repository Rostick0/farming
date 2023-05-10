import ReactPaginate from "react-paginate";
import styles from './paginate.module.scss';

const Paginate = ({
    className,
    forcePage,
    pageCount,
    onPageChange
}) => {
    const styleClassName = className ? ' ' + className : '';

    const ArrowLeft = () => {
        return (
            <svg width="7.5" height="12" viewBox="0 0 5 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM2 3.5H1L1 4.5H2L2 3.5Z" />
            </svg>
        );
    };

    const ArrowRight = () => {
        return (
            <svg width="7.5" height="12" viewBox="0 0 5 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35355 4.35355C4.54882 4.15829 4.54882 3.84171 4.35355 3.64645L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.29289 4L0.464466 6.82843C0.269204 7.02369 0.269204 7.34027 0.464466 7.53553C0.659728 7.7308 0.976311 7.7308 1.17157 7.53553L4.35355 4.35355ZM3 4.5H4V3.5H3V4.5Z" />
            </svg>
        );
    };

    return (
        <ReactPaginate
            className={styles.paginate + styleClassName}
            pageLinkClassName={styles.paginate__item}
            activeLinkClassName={styles.paginate__item + ' ' + styles.paginate__item_active}
            nextLinkClassName={styles.paginate__item}
            previousLinkClassName={styles.paginate__item}
            breakLinkClassName={styles.paginate__break}
            disabledLinkClassName={styles.paginate__break}
            forcePage={parseInt(forcePage) - 1}
            previousLabel={<ArrowLeft />}
            nextLabel={<ArrowRight />}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={page => onPageChange(page)}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
        ></ReactPaginate>
    );
};

export {
    Paginate
}