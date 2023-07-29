import Typography from "./Typography";
import Character from "../assets/images/character.png"
import PropTypes from 'prop-types';

function Section (props) {
    return (
        <div key={props.title} className='rounded-3xl w-[352px] h-[293px] border-[1px]'>
          <div className="h-[129px] flex bg-[#152A46] rounded-t-3xl pt-[16px]">
            <img className='ml-[28px]' src={Character} alt="Character" />
            <div className="ml-[17px]">
            <Typography size='body' variant='tabuti'>{props.desc}</Typography>
              <Typography variant='primary' size='title'>{props.title}</Typography>
              <Typography size='body' variant='primary'>{props.content}</Typography>
            </div>
          </div>
          <div className="h-[164px] px-[27px] py-[10px]">
          <Typography variant="blank" size="title">
              {props.program}
            </Typography>
            <Typography variant="blank" size="title">
              {props.info}
            </Typography>
            <Typography variant="error" size="title">
              {props.price}
            </Typography>
          </div>
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.string,
}

export default Section;