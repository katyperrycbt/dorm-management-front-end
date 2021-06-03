import { useState, useEffect } from 'react';
import { Container, Typography, Link, Grid, Paper, Box } from "@material-ui/core";
import clsx from 'clsx';

import useStyles from './styles2'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#3f51b5' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/thuc.katy" style={{ color: '#f44336' }}>
                IU Dormitory
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const About = ({ open }) => {
    const [stik, setStik] = useState(false);
    const classes = useStyles();
    
    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > 258) {
            setStik(true);
        } else {
            setStik(false);
        }
      }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    })


    return <Container maxWidth='lg' className={classes.root}>
        <main className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
                <Grid container spacing={3} style={{ padding: '5px' }}>
                    <Grid item xs={12}>
                        <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>About</Typography>
                        <Typography align="center" variant='h5' style={{ color: '#f44336' }}>The following are the <u><b>terms and conditions</b></u> of use of the website.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div id={`diwejcccc`} className={stik ? classes.stik: ''} onScroll={listenToScroll}>
                            <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                                <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Effective from June 1, 2021</Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>1. <font color='#357a38' className={classes.under}>Introduction</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>2. <font color='#357a38' className={classes.under}>The use of our service</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>3. <font color='#357a38' className={classes.under}>The use of third-party services</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>4. <font color='#357a38' className={classes.under}>User-generated content</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>5. <font color='#357a38' className={classes.under}>The rights you grant us</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>6. <font color='#357a38' className={classes.under}>Customer support</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>7. <font color='#357a38' className={classes.under}>Disclaimer</font></Typography>
                                <Typography align="left" style={{ color: '#3f51b5'}} className={classes.shadow}>8. <font color='#357a38' className={classes.under}>Restrictions</font></Typography>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper style={{ padding: '20px' }} id={`contact1`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>Introduction</Typography>
                            <Typography align='justify' variant='body2'>
                                Thank you for choosing IU- Dormitory website as well as choosing to stay at the dormitory of International University - National University of Ho Chi Minh City.
                                </Typography><Typography align='justify' variant='body2'>
                                By subscribing to or using any IU Dormitory service, including all related features and functions, websites and user interfaces, and all associated software applications and content in connection with our services (collectively, the "IU Dormitory Services" or the "Services"), or access any type of notices, policies or other content or materials made available through through the Service ("Content") with which you enter into a binding contract with the legal entity IU Dormitory.
                            </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact2`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>The use of our service</Typography>
                            <Typography align='justify' variant='body2'>
                                The IU Dormitory Service and Content are the property of IU Dormitory and its licensors. We grant you a limited, non-exclusive and revocable license to use the IU Dormitory Service and a limited, non-exclusive and revocable personal, non-commercial use of the Content (call) generally "Access Rights"). This access will remain in effect unless and until you or IU Dormitory terminate this right. You represent and agree that you are using the IU Dormitory Service and Content for your personal, non-commercial use, and that you will not redistribute or otherwise transfer the IU Dormitory Service or Content.
                                </Typography>
                            <Typography align='justify' variant='body2'>
                                IU Dormitory software applications and Content may not be sold or transferred to you, and IU Dormitory and its licensors reserve all ownership rights to all copies of IU Dormitory software applications and Content even after installed on personal computers, mobile phones, tablets, wearables, speakers and/or other devices ("Devices").
                                </Typography>
                            <Typography align='justify' variant='body2'>
                                All IU Dormitory trademarks, service marks, trade names, logos, domain names and any other features of the IU Dormitory brand ("IU Dormitory Brand Features") are the property of IU Dormitory or its licensors. Licensed by IU Dormitory, full ownership. These Agreements do not grant you any right to use any IU Dormitory Brand Features whether for commercial or non-commercial purposes.
                                </Typography>
                            <Typography align='justify' variant='body2'>
                                You agree to abide by our User Guidelines and not to use the IU Dormitory Service, the Content, or any portion of the Service and the Content in any manner not expressly set out in the Agreements. favorable. Except for the rights expressly set forth in the Agreement, IU Dormitory grants no right, title or interest to you in the IU Dormitory Service or the Content.
                                </Typography>
                            <Typography align='justify' variant='body2'>
                                Third-party software (for example, an open-source software library) in the IU Dormitory Service is made available to you under the appropriate license terms of the third-party software library as described in the help section. or settings on our desktop and mobile apps and/or on our website.
                            </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact3`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>The use of third-party services</Typography>
                            <Typography align='justify' variant='body2'>
                                The IU Dormitory Service is integrated with or may interact with third-party applications, websites and services ("Third Party Applications") and Third Party Devices to provide the IU Dormitory Service to friend. These Third Party Applications and Devices may have their own terms and conditions of use and privacy policy, and use of these Third Party Applications and Devices will be subject to these terms and conditions. such terms and conditions and privacy policy. You understand and agree that IU Dormitory does not endorse and is not responsible or liable for the conduct, features or content of any Third Party App or Device or for any other transaction. which services you may engage with with third-party Device and Application providers. Also, IU Dormitory does not guarantee the compatibility or long-term compatibility of Third-Party Apps and Devices with the Service.
                            </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact4`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>User-generated content</Typography>
                            <Typography align='justify' variant='body2'>
                                IU Dormitory users may post, upload, or contribute content to the Service (which may include images, text, messages, information, playlist titles, descriptions and compilations and/or other content types) ("User Content"). For the avoidance of doubt, "User Content" includes any content posted to the IU Dormitory Support Community as well as any other part of the IU Dormitory Service.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                You represent that, for any User Content you post to IU Dormitory, (1) you own or have the right to post such User Content and (2) such User Content, or IU Dormitory's use of such User Content, such content as set forth in this Agreement shall not infringe the Agreement or any other rights set forth in the User Guide, applicable law, or otherwise harm intellectual property, public images, personality, or violates the rights of others, or implies an affiliation with or endorsement of you or your User Content through IU Dormitory or any artist, band, label, or entity or any other individual without the written consent of IU Dormitory or that individual or entity.                            </Typography>
                            <Typography align='justify' variant='body2'>
                                IU Dormitory may, but is not obligated to, monitor, review or edit User Content. In all cases, IU Dormitory reserves the right to remove or disable access to any User Content for any reason, or without providing a reason, including User Content, which IU Dormitory has in its sole discretion. determined to have breached the Agreements. IU Dormitory may take these actions without prior notice to you or any other third party. The removal or disabling of access to User Content is at our sole discretion, and we do not undertake to remove or disable access to any particular User Content.                            </Typography>
                            <Typography align='justify' variant='body2'>
                                You are solely responsible for all User Content that you post.  IU Dormitory is not responsible for User Content and does not endorse any opinions in User Content. YOU AGREE THAT IF ANY PERSON HAS ANY COMPLAINTS OF IU Dormitory RELATED TO THE USER CONTENT THAT YOU POST, TO THE SUPER PERMITTED BY LOCAL LAW, YOU WILL BE COMPLETED AND WRONG. , LOSS AND EXPENSES OF ANYTHING (INCLUDING REASONABLE AGENTS AND CHARGES) ARRIVING FROM THAT CLAIM.                             </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact5`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>The rights you grant us</Typography>
                            <Typography align='justify' variant='body2'>
                                In consideration of the rights granted to you under these Agreements, you grant us the right (1) to permit the IU Dormitory Service to use the processor, bandwidth, and storage hardware of your Device to create conditions for the Service to operate, (2) provide advertising and other information to you, and (3) enable our business partners to perform similar activities. In any part of the IU Dormitory Service, the Content you access, including its selection and placement, may be affected by commercial guidelines, including IU Dormitory's agreements with third parties. . Certain Content licensed, syndicated, created by or prepared by IU Dormitory (e.g. podcast audio files) may include advertising as part of the Content. The IU Dormitory Service provides such Content in an unedited state to you.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                If you submit feedback, comments, or suggestions to IU Dormitory in connection with the IU Dormitory Service or Content ("Feedback"), you acknowledge that this Feedback is not confidential and you authorize IU Dormitory to use it without limitation. term for such Feedback and without payment to you. Feedback is considered a type of User Content.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                You grant IU Dormitory a non-exclusive, transferable, sublicensable, royalty-free, perpetual license (or for a period equal to the term of the Agreement plus twenty (20) ) year when in regions where this is not permitted by law), irrevocable, fully payable, valid worldwide for use, reproduction, public release (in particular performance or display), publish, translate, modify, create derivative works from, and distribute any of your User Content in connection with the Service through any medium, whether either separately or in combination with other Content or Materials by any means, method or technology, whether known now or later created in the future. In addition to the rights specifically set forth herein, you reserve the right to own all rights, including intellectual property rights, to the User Content. If permitted and applicable by applicable law, you also agree to waive and not exercise any "moral rights" or equivalent rights, such as the right to be recognized as the author of any Content. any user, including Feedback and the right to object to the handling of Offensive User Content.
                            </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact6`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>Customer support</Typography>
                            <Typography align='justify' variant='body2'>
                                IU Dormitory respects intellectual property rights and hopes you do too. We have established a few ground rules that you must follow when using the Service, to ensure that IU Dormitory remains an attractive service for everyone. You must abide by these rules and encourage other users to do the same.                            </Typography>
                            <Typography align='justify' variant='body2'>
                                The following activities are strictly prohibited for any reason:

                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                1. copy, redistribute, reproduce, "extract", record, transmit, perform or release to the public, broadcast, or otherwise make available to the public any part of the IU Dormitory Service or Content Content, or use of the IU Dormitory Service or Content where it is not expressly permitted under the Agreements or applicable law, or may infringe intellectual property rights (such as copyright) in the IU Dormitory Service or Content content or any part of the Service/Content;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                2. use the IU Dormitory Service to import or copy any internal files that you do not have the legal right to import or copy in this way;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                3. transmit cached copies of Content from an authorized device to any other device by any means;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                4. reverse engineer, decompile, disassemble, modify or create derivative works of the IU Dormitory Service, the Content or any other part, except as permitted by applicable law. [If applicable law permits you to decompile any portion of the IU Dormitory Service or the Content as required to obtain the information necessary to develop a standalone program that can be exploited in conjunction with the Service IU Dormitory or another program, the information you receive from the activities (a) may only be used for the purposes mentioned above, (b) may not be disclosed or communicated without prior consent. IU Dormitory's prior written consent to any third party without disclosure or communication to achieve that purpose and c) not used to create any software or services similar to any other any part of the IU Dormitory Service or Content];
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                5. destroy any technology used by IU Dormitory, its licensors or any third party to protect the Content or the Services;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                6. sell, rent, sublicense or lease any part of the IU Dormitory Service or the Content;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                7. circumvent any territorial restrictions imposed by IU Dormitory or its licensors;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                8. artificially increase plays, followers, or manipulate the Service by (i) using bots, scripts or other automated processes; (ii) provide or accept any form of compensation (financial or otherwise), or (iii) any other means;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                9. remove or alter copyright, trademark or other intellectual property notices contained on the Content or the Services or made available through the Services (including for the purpose of concealing or altering any sign of copyright ownership or source of the Content);
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                10. seek to cancel or block advertisements in the IU Dormitory Service, or create/distribute tools designed to block advertisements in the IU Dormitory Service;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                11. give your password to any other person or use the username and password of any other person;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                12. "crawl" the IU Dormitory Service or use any other automated method (including bots, scrapers, and spiders) to view, access, or collect information from IU Dormitory or the IU Dormitory Service;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                13. sell user accounts or playlists or receive or offer any financial or other compensation for influencing the name of an account or playlist or the content in the account or playlist. handouts; or
                                artificially upgrade the Content by automatic means.
                            </Typography>
                            <Typography align='justify' variant='body2' >
                                Please respect IU Dormitory, the owner of the Content, and other users of the IU Dormitory Service. Do not engage in any activity, post any User Content, or register and/or use a username that includes documents:
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                1. is offensive, abusive, defamatory, obscene, threatening, or obscene;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                2. illegal, or for the purpose of promoting or committing illegal acts of any kind, including infringing upon the intellectual property, privacy, or proprietary rights of IU Dormitory or a third party ;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                3. provide your password or knowingly provide the password of any other user or knowingly include third party personal data or for the purpose of collecting such personal data;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                4. include malicious content such as malware, Trojans or viruses, or interfere with any user's access to the Service;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                5. intends or acts to harass or bully other users;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                6. forge or misrepresent your affiliation with another user, person or entity, or is false, deceptive, deceptive or intentionally misleading;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                7. transmit unsolicited mass mailings or other forms of spam ("spam"), spam, chain mail or similar;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                8. engage in commercial or sales activities, such as advertisements, promotions, contests, sweepstakes, or multi-level programs, without express permission of IU Dormitory;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                9. link, reference, or otherwise promote commercial products or services, except as expressly authorized by IU Dormitory;
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                10. interfere with or in any way disrupt the IU Dormitory Service, tamper with, compromise, or attempt to probe, scan, or test for vulnerabilities in the Service or IU Dormitory's computer systems, networks, usage rules, IU Dormitory's use or security components, authentication measures or any other safeguards applicable to the Services, Content or other components; or
                            </Typography>
                            <Typography align='justify' variant='body2' style={{ margin: '0px 0px 0px 20px' }}>
                                11. conflicts with the Agreements, as determined by IU Dormitory.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                You acknowledge and agree that posting any User Content that violates these User Guidelines (or IU Dormitory has reason to believe that such content violates these User Guidelines) may result in termination. immediately terminate or suspend your IU Dormitory account. You also agree that IU Dormitory may take back your username for good reason, including your breach of the Agreements.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                Be cautious in how you use the IU Dormitory Service and the content you share. The IU Dormitory Service includes social and interactive features, including the ability to post User Content, share content, and make certain information about you public. Remember that information shared or publicly available information may be used and re-shared by other users on IU Dormitory or via the website, so please use IU Dormitory with caution and caution. to your account settings.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                IU Dormitory is not responsible for your choices to post material on the Service.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                Your password protects your user account, and you are solely responsible for keeping your password safe and secure. You understand that you are responsible for all use (including unauthorized use) of your username and password on the Service. If your username or password is lost or stolen, or if you believe that a third party has gained unauthorized access to your account, you must immediately notify us and change your password within a short period of time. earliest time.
                            </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact7`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>Disclamer</Typography>
                            <Typography align='justify' variant='body2'>
                                YOU UNDERSTAND AND AGREE THAT IU Dormitory SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" AND WITHOUT EXPRESS OR IMPLIED WARRANTY OF ANYTHING. IU Dormitory AND ALL CONTENT OWNERS DO NOT COMMITMENT AND DISCLAIMER ANY RESPONSIBILITIES OR CONDITIONS OF QUALITY, MERCHANTABILITY, COMPATIBILITY FOR A NON-USE PURPOSE. IU Dormitory AND THE CONTENTS OWNER DO NOT WARRANT THAT THE IU Dormitory SERVICE IS FREE OF MANY MONEY OR OTHER HARMFUL COMPONENTS. ALSO, IU Dormitory DOES NOT WARRANT OR WARRANTIES OR WARRANTIES, WARRANTIES, WARRANTIES, OR RESPONSIBILITIES FOR ANY THIRD PARTY APPS (OR CONTENT) ANYTHING IS ADVERTISED, PROMOTED, OR PROVIDED BY THIRD PARTY ON OR THROUGH THE IU Dormitory SERVICE OR ANY SUPER LINKS SITE, OR AN ANSWER HAVE AN OBLIGATIONS FOR ANY TRANSACTION BETWEEN YOU AND THE THIRD PARTY SUPPLYING THE ABOVE CONTENT.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                NO ORAL OR WRITTEN ADVICE OR INFORMATION THAT YOU COLLECT FROM IU Dormitory WILL CONSIDER ANY WARRANTY OF ANY IU Dormitory. WHILE USE OF THE IU Dormitory SERVICE, YOU CAN ACCESS THE CLEARLY CONTENT FILTERING FEATURES, BUT USE OF THESE FEATURES MAY LEED TO DISPLAY ONLY SOME CONTENT AND YOU WON'T ENTER THESE FEATURES TO FILTER ALL CLEARLY CONTENT.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                WITHOUT LIMITATION OF THE PROVISIONS ABOVE, ANY INFORMATION IN THIS PART HAS BEING EFFECTED IN LIMITATION OF IU Dormitory'S LIABILITY IN THE CASE OF NON-PERFORMANCE OR IMPLEMENTATION OF IU Dormitory OR PART OF THE FULL OR PART OF IU Dormitory ABOUT THE AGREEMENT OF SERVICE PROVISION. THIS PART APPLIES TO THE HIGHEST SCOPE ALLOWED BY CURRENT LAW.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                THIS SECTION DOES NOT INCLUDE YOUR PROVISIONAL RIGHTS AS A CONSUMER.
                            </Typography>
                        </Paper>
                        <Paper style={{ padding: '20px' }} id={`contact8`}>
                            <Typography variant="h6" style={{ color: '#002984' }}>Restrictions</Typography>
                            <Typography align='justify' variant='body2'>
                                YOU AGREE THAT YOUR ONLY REMEDY FOR THE PROBLEMS OR WHEN DISPATIBLE WITH IU Dormitory'S SERVICE IS TO INSTALL THE SOFTWARE AND STOP USING THE IU Dormitory SERVICE. YOU AGREE THAT IU Dormitory HAS NO OBLIGATIONS OR RESPONSIBILITIES OUT OF OR IN RELATED TO THIRD PARTY APPLICATIONS OR CONTENT PROVIDED THROUGH OR IN RELATED TO YOUR SERVICES AND SERVICES OF THE IU Dormitory THAT THIRD PARTY APP may be GOVERNED UNDER THE PROVISIONS IN THE SEPARATE AGREEMENT BETWEEN YOU AND THAT THIRD PARTY, YOUR ONLY REMEDY, LIKE IU Dormitory, FOR ISSUES NOT LOOKING FOR THIRD PARTY APPS OR CONTENT IS TO INSTALL AND/OR STOP USING THE THIRD PARTY APPLICATION.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                IN ANY CASE, IU Dormitory, OFFICERS, SHAREHOLDERS, EMPLOYEES, AGENTS, DIRECTORs, SUBSIDIARIES, ASSOCIATES, SUPPLIERS, DISTRIBUTORs, SUPPLIERS OR LICENSES RESPONSIBLE FOR:
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                (1) ANY LOSS OR DAMAGE (INCLUDING ANY INCREDIBLE, SPECIAL, ACCIDENTAL, PENALTY OR CORRECTIVE DAMAGE) INCREDIBLE. FOREIGN LOSS OR DAMAGE IF IT IS CLEARLY THAT THIS LOSS/DAMAGE WILL HAPPEN IF BOTH PARTY KNOW THIS POSSIBILITY MAY HAVE BEEN ACCURATE;
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                (2) ANY:
                                (A) COST OF USE;
                                (B) DATA LOSS;
                                (C) BUSINESS LOSS;
                                (D) LOSS OF PROFITS; OR
                                (E) DAMAGE OF DEVICE, TO THE WHERE YOU CAN AVOID THAT DAMAGES BY FOLLOWING OUR ADDITIONS TO APPLY UPDATES TO SERVICES OR CONS YOU DO NOT FOLLOW THE INSTALLATION INSTRUCTIONS OR HAVE MINIMUM SYSTEM REQUIREMENTS WE RECOMMEND,
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                IN ANY CASE ARRIVING FROM THE USE OF OR ANNOUNCEMENT OF THE THIRD PARTY SERVICES, DEVICES, DEVICES, OR THIRD PARTY APPLIANCES CONTENTS, ANY SPOTIF LAW, BE WARNED ABOUT THE POSSIBILITY OF SUCH DAMAGE AND EVEN IF THE REMARK DOESN'T ACHIEVE THE NEEDED PURPOSE;
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                (3) GENERAL LEGAL LIABILITY FOR ALL COMPLAINTS RELATED TO IU Dormitory SERVICES, THIRD PARTY APPLICATIONS OR THIRD PARTY APPLICATION CONTENTS BIGGER TO THE AMOUNT YOU SPOTIF IN THERE; OR
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                (4) NO PERFORMANCE OR IMPLIED PERFORMANCE OR DEPENDENCE OF PERFORMANCE OF OBLIGATIONS BEING FOUNDED FROM AGREEMENTS BECAUSE OF ANY RESPONSIBILITY OR ANY INCREDIBLE OR IMPOSSIBLE CAUSE REASONABLE CONTROLS OF IU Dormitory.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                Nothing in this Agreement shall remove or limit IU Dormitory's liability for fraud, untrue deception, death or personal injury resulting from IU Dormitory's negligence and negligence. out in accordance with applicable law.
                            </Typography>
                            <Typography align='justify' variant='body2'>
                                THIS PART APPLIES TO THE HIGHEST SCOPE ALLOWED BY CURRENT LAW. YOU MAY HAVE RIGHTS UNDER THE LAW APPLYING IN YOUR JUSTICE, PROGRAMS REGULATIONS OTHER OUTSIDE OF THE ABOVE.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    </Container>
}

export default About