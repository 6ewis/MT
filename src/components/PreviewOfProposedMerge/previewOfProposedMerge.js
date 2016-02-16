import React from 'react';

let PreviewOfProposedMerge = React.createClass({
  render: function() {
    let {location} = this.props;
    let {content, positionInfoClone} = location.state.data;

    let container = {
      border: "1px solid black"
    };

    return (
     <div>
      <h3>Completed Merge of John Smith on 2014-01-31</h3>
      <br></br>
      <table>
        <tbody>
          <tr>
            <td> Entity ID </td>
            <td></td>
          </tr>
          <tr>
            <td> Entity Type </td>
            <td> {content.entityType} </td>
          </tr>
          <tr>
            <td> Name </td>
            <td> {content.name} </td>
          </tr>
           <tr>
            <td> Sort Name </td>
            <td> {content.sortName} </td>
          </tr>
           <tr>
            <td> Conyers Employee </td>
            <td> Yes </td>
          </tr>
           <tr>
            <td> Title </td>
            <td> {content.title} </td>
          </tr>
           <tr>
            <td> Birth Date </td>
            <td> {content.birthDate} </td>
          </tr>
           <tr>
            <td> Deceased Date </td>
            <td> {content.deceasedDate} </td>
          </tr>
           <tr>
            <td> Nationality </td>
            <td> {content.nationality} </td>
          </tr>
            <tr>
            <td> Country of Residence </td>
            <td></td>
          </tr>
            <tr>
            <td> Country of Domicile </td>
            <td></td>
          </tr>
            <tr>
            <td> Phone</td>
            <td> {content.phoneNumber} </td>
          </tr>
            <tr>
            <td> Fax </td>
            <td></td>
          </tr>
            <tr>
            <td> Telex </td>
            <td></td>
          </tr>
            <tr>
              <td> Registered Address </td>
              <td> </td>
          </tr>
            <tr>
              <td> Mailing Address </td>
              <td> </td>
          </tr>
            <tr>
              <td> Dividend Address </td>
              <td> </td>
          </tr>
          
        </tbody>
      </table>
          <h3> Position Specific Addresses </h3>
    
          
          <table style={container} >
            <tbody>
              <tr><td><h4 > AEGIS INDEMNITY LIMITED (C#00007)(M#000180) </h4></td></tr>
              <tr>
                <td>Position</td>
                <td> </td>
              </tr>
              <tr>
                <td> Registered Address </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        <br></br>
         <h3> Affected Entities & Positions </h3>
       <table style={container} >
            <tbody>
              <tr><td><h4 > John Smith (CP: 1234) </h4></td></tr>
              <tr>
                <td>Entity Type</td>
                <td></td>
              </tr>
              <tr>
                <td> Name </td>
                <td></td>
              </tr>
              <tr>
                <td> Sort name </td>
                <td></td>
              </tr>
                 <tr>
                <td> Conyers Employee </td>
                <td></td>
              </tr>
                 <tr>
                <td> Title </td>
                <td></td>
              </tr>
               <tr>
                <td> Birth Date</td>
                <td></td>
              </tr>
                <tr>
                 <td> Deceased Date </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Nationality </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Country of Residence </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Country of Domicile </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Phone </td>
                 <td> </td>
                </tr>
                <tr>
                 <td> Fax </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Telex </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Email </td>
                 <td></td>
                </tr>
                <tr>
                 <td> Registered Address </td>
                 <td></td>
                </tr>
                <tr>
                 <td>  Mailing Address </td>
                 <td></td>
                </tr>
                <tr>
                 <td>  Dividend Address </td>
                 <td></td>
                </tr>
            </tbody>
          </table>
    </div>
    );
 }
});

export default PreviewOfProposedMerge;
